import { CarStatus } from '../../types/types.ts';

type Props = {
  status: CarStatus;
};

export default function StatusMessage({ status }: Props) {
  return (
    <>
      {status === 'finished' && (
        <p className="text-green-600 font-bold">FINISHED!</p>
      )}
      {status === 'broken' && <p className="text-red-600 font-bold">BROKEN!</p>}
    </>
  );
}
