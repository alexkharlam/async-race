export type Car = { name: string; key: number; id: number; color: string };
export type Cars = [Car];
export type CarStatus = 'ready' | 'finished' | 'broken' | 'running';
export type AnimationState = {
  isAnimating: boolean;
  isStopped: boolean;
  isPaused: boolean;
  x: number;
  broken: boolean;
  finished: boolean;
  duration: number;
};
