import { CarStatus } from '../../types/types.ts';
import TrackButton from './TrackButton.tsx';

type Props = {
  status: CarStatus;
  onStart: () => void;
  onStop: () => void;
};

export default function MoveButtons({ status, onStart, onStop }: Props) {
  return (
    <div className="flex gap-0.5 flex-col">
      <TrackButton
        classname="bg-emerald-700"
        onClick={onStart}
        disabled={status === 'running'}
      >
        START
      </TrackButton>
      <TrackButton
        classname="bg-rose-700"
        onClick={onStop}
        disabled={status === 'running'}
      >
        STOP
      </TrackButton>
    </div>
  );
}
