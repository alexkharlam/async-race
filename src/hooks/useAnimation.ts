import { useCallback, useState } from 'react';
import { AnimationState, Car, NewWinner } from '../types/types.ts';
import api from '../utils/api.ts';

const initialAnimationState = {
  isAnimating: false,
  isStopped: true,
  isPaused: false,
  x: 0,
  broken: false,
  finished: false,
  duration: 0,
};

const startedAnimationState = {
  isAnimating: true,
  isStopped: false,
  isPaused: false,
  finished: false,
  broken: false,
  x: 0,
};

function useAnimation(car: Car, onFinish: (winner: NewWinner) => void) {
  const [animation, setAnimation] = useState<AnimationState>(initialAnimationState);

  const updateAnimation = useCallback((updated: Partial<AnimationState>) => {
    setAnimation((prevState) => ({ ...prevState, ...updated }));
  }, []);

  const handleStart = useCallback(async () => {
    try {
      const { distance, velocity } = await api.startEngine(car.id);
      const dataDuration = distance / velocity;

      updateAnimation({ ...startedAnimationState, duration: dataDuration / 1000 });
      await api.drive(car.id);
    } catch (err) {
      updateAnimation({ isAnimating: false, isPaused: true, broken: true });
    }
  }, [car.id, updateAnimation]);

  const handleStop = useCallback(async () => {
    await api.stopEngine(car.id);
    setAnimation(initialAnimationState);
  }, [car.id]);

  const handleUpdate = useCallback(
    (latest: { x: number }) => {
      if (!animation.isAnimating) return;
      updateAnimation({ x: latest.x });
    },
    [animation.isAnimating, updateAnimation],
  );

  const handleFinish = useCallback(() => {
    if (!animation.isAnimating) return;
    updateAnimation({ finished: true });
    onFinish({ name: car.name, id: car.id, duration: animation.duration });
  }, [animation.isAnimating, car.id, car.name, onFinish, animation.duration, updateAnimation]);

  return { handleStart, animation, handleStop, handleUpdate, handleFinish };
}

export default useAnimation;
