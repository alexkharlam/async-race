import { AnimationState } from '../../types/types.ts';
import TrackButton from './TrackButton.tsx';

type Props = {
  onStart: () => void;
  onStop: () => void;
  animation: AnimationState;
};

export default function MoveButtons({ animation, onStart, onStop }: Props) {
  return (
    <div className="flex gap-0.5 flex-col">
      <TrackButton
        classname="bg-emerald-700"
        onClick={onStart}
        disabled={
          animation.isAnimating || (!animation.isStopped && !animation.isPaused)
        }
      >
        START
      </TrackButton>
      <TrackButton
        classname="bg-rose-700"
        onClick={onStop}
        disabled={animation.isStopped}
      >
        STOP
      </TrackButton>
    </div>
  );
}
