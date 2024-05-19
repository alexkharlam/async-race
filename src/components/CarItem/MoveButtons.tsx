import { Play, Pause } from 'react-feather';
import { AnimationState } from '../../types/types.ts';
import IconButton from '../ui/IconButton.tsx';

type Props = {
  onStart: () => void;
  onStop: () => void;
  animation: AnimationState;
};

export default function MoveButtons({ animation, onStart, onStop }: Props) {
  const isStartDisabled = animation.isAnimating || (!animation.isStopped && !animation.isPaused);

  const isStopDisabled = animation.isStopped;

  return (
    <div className="flex items-center gap-0.5 flex-col">
      <IconButton
        ButtonIcon={Play}
        disabled={isStartDisabled}
        onClick={onStart}
        classname="bg-green-600"
      />

      <IconButton
        ButtonIcon={Pause}
        disabled={isStopDisabled}
        onClick={onStop}
        classname="bg-red-600"
      />
    </div>
  );
}
