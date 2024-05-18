import { AnimationState } from '../../types/types.ts';

type Props = {
  animation: AnimationState;
};

export default function StatusMessage({ animation }: Props) {
  return (
    <div className="absolute -translate-y-1/2 top-1/2 right-1">
      {animation.finished && (
        <p className="text-green-600 font-bold">FINISHED!</p>
      )}
      {animation.broken && <p className="text-red-600 font-bold">BROKEN!</p>}
    </div>
  );
}
