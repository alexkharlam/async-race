import { AnimationState } from '../../types/types.ts';

type Props = {
  animation: AnimationState;
};

export default function StatusMessage({ animation }: Props) {
  return (
    <div className="absolute -translate-y-1/2 top-1/2 right-[160px]">
      {animation.finished && (
        <p className="text-blue-primary text-base font-bold">FINISHED!</p>
      )}
      {animation.broken && (
        <p className="text-pink-600 text-base font-bold">BROKEN!</p>
      )}
    </div>
  );
}
