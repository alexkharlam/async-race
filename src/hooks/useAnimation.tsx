import { useCallback, useState } from 'react';
import { AnimationState, Car, NewWinner } from '../types/types.ts';
import api from '../utils/api.ts';

function useAnimation(car: Car, onFinish: (winner: NewWinner) => void) {
  const [animation, setAnimation] = useState<AnimationState>({
    isAnimating: false,
    isStopped: true,
    isPaused: false,
    x: 0,
    broken: false,
    finished: false,
    duration: 0,
  });

  const handleStart = useCallback(async () => {
    try {
      const { distance, velocity } = await api.startEngine(car.id);

      const dataDuration = distance / velocity;

      setAnimation((prevState) => ({
        ...prevState,
        isAnimating: true,
        isStopped: false,
        isPaused: false,
        finished: false,
        broken: false,
        duration: dataDuration / 1000,
      }));

      await api.drive(car.id);
    } catch (err) {
      setAnimation((prevState) => ({
        ...prevState,
        isAnimating: false,
        isPaused: true,
        broken: true,
      }));
    }
  }, [car.id]);

  const handleStop = useCallback(async () => {
    setAnimation({
      isAnimating: false,
      isStopped: true,
      isPaused: false,
      x: 0,
      broken: false,
      finished: false,
      duration: 0,
    });
  }, []);

  const handleUpdate = useCallback(
    (latest: { x: number }) => {
      if (animation.isAnimating) {
        setAnimation((prevState) => ({
          ...prevState,
          x: latest.x,
        }));
      }
    },
    [animation.isAnimating],
  );

  const handleFinish = useCallback(() => {
    if (!animation.isAnimating) return;
    setAnimation((prevState) => ({
      ...prevState,
      finished: true,
    }));
    onFinish({ name: car.name, id: car.id, duration: animation.duration });
  }, [animation.isAnimating, car.id, car.name, onFinish, animation.duration]);

  return { handleStart, animation, handleStop, handleUpdate, handleFinish };
}

export default useAnimation;
