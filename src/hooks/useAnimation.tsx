import { useState } from 'react';
import axios from 'axios';
import config from '../data/config.ts';
import { AnimationState, Car } from '../types/types.ts';

const { BASE_URL } = config;

function useAnimation(car: Car) {
  const [animation, setAnimation] = useState<AnimationState>({
    isAnimating: false,
    isStopped: true,
    isPaused: false,
    x: 0,
    broken: false,
    finished: false,
    duration: 0,
  });

  const handleStart = async () => {
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
  };

  const handleStop = () => {
    setAnimation({
      isAnimating: false,
      isStopped: true,
      isPaused: false,
      x: 0,
      broken: false,
      finished: false,
      duration: 0,
    });
  };

  const handleUpdate = (latest: { x: number }) => {
    if (animation.isAnimating) {
      setAnimation((prevState) => ({
        ...prevState,
        x: latest.x,
      }));
    }
  };

  const handleFinish = () => {
    if (!animation.isAnimating) return;
    setAnimation((prevState) => ({
      ...prevState,
      finished: true,
    }));
  };

  return { handleStart, animation, handleStop, handleUpdate, handleFinish };
}

export default useAnimation;
