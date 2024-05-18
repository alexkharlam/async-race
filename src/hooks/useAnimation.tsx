import { useState } from 'react';
import { AnimationState } from '../types/types.ts';

function useAnimation() {
  const [animation, setAnimation] = useState<AnimationState>({
    isAnimating: false,
    isStopped: true,
    isPaused: false,
    x: 0,
    broken: false,
    finished: false,
    duration: 0,
  });
}

export default useAnimation;
