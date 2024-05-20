export type Car = { name: string; id: number; color: string };
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
export type NewWinner = {
  name: string;
  id: number;
  duration: number;
};
export type WinnerData = {
  wins: number;
  time: number;
  id: number;
};
export type WinnersData = WinnerData[];
export type WinnerWithCarData = {
  name: string;
  color: string;
  wins: number;
  time: number;
  id: number;
};
export type EngineData = {
  velocity: number;
  distance: number;
};
