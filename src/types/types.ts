export type Car = { name: string; key: number; id: number; color: string };
export type Cars = [Car];
export type AnimationState = {
  isAnimating: boolean;
  isStopped: boolean;
  isPaused: boolean;
  x: number;
  broken: boolean;
  finished: boolean;
  duration: number;
};
export type Race = {
  isRacing: boolean;
  winner: null | { name: string; id: number };
  isResetted: boolean;
};
