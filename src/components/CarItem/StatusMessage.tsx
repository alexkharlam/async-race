import { CarStatus } from '../../types/types.ts';

type Props = {
  status: CarStatus;
};

export default function StatusMessage({ status }: Props) {
  return (
    <div className="absolute -translate-y-1/2 top-1/2 right-1">
      {status === 'finished' && (
        <p className="text-green-600 font-bold">FINISHED!</p>
      )}
      {status === 'broken' && <p className="text-red-600 font-bold">BROKEN!</p>}
    </div>
  );
}
