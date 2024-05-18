import { useCallback, useState } from 'react';
import axios from 'axios';
import config from '../data/config.ts';
import { AnimationState, Car } from '../types/types.ts';

const { BASE_URL } = config;

function useAnimation(car: Car, onFinish: (name: string, id: number) => void) {
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
      const { data } = await axios.patch(
        `${BASE_URL}/engine/?id=${car.id}&status=started`,
      );
      const dataDuration = data.distance / data.velocity;

      setAnimation((prevState) => ({
        ...prevState,
        isAnimating: true,
        isStopped: false,
        isPaused: false,
        finished: false,
        broken: false,
        duration: dataDuration / 1000,
      }));

      await axios.patch(`${BASE_URL}/engine/?id=${car.id}&status=drive`);
    } catch (err) {
      setAnimation((prevState) => ({
        ...prevState,
        isAnimating: false,
        isPaused: true,
        broken: true,
      }));
    }
  }, [car.id]);

  const handleStop = useCallback(() => {
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
    onFinish(car.name, car.id);
  }, [animation.isAnimating, car.id, car.name, onFinish]);

  return { handleStart, animation, handleStop, handleUpdate, handleFinish };
}

export default useAnimation;
