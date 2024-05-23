import { Ref, forwardRef, useImperativeHandle } from 'react';
import { Car, NewWinner } from '../../types/types.ts';
import Track from './Track.tsx';
import StatusMessage from './StatusMessage.tsx';
import MoveButtons from './MoveButtons.tsx';
import ManageCarButtons from './ManageCarButtons.tsx';
import useAnimation from '../../hooks/useAnimation.ts';

export type RefType = {
  handleStart: () => void;
  handleStop: () => void;
};

type Props = {
  car: Car;
  onUpdate: () => void;
  onFinish: (winner: NewWinner) => void;
};

const CarItem = forwardRef(({ car, onUpdate, onFinish }: Props, ref: Ref<RefType>) => {
  const { animation, handleFinish, handleStart, handleStop, handleUpdate } = useAnimation(
    car,
    onFinish,
  );

  useImperativeHandle(ref, () => ({ handleStart, handleStop }));

  return (
    <div className="mb-3">
      <div className="flex gap-1 relative items-center mb-2">
        <ManageCarButtons onUpdate={onUpdate} car={car} />
        <MoveButtons animation={animation} onStart={handleStart} onStop={handleStop} />
        <Track animation={animation} onComplete={handleFinish} onUpdate={handleUpdate} car={car} />
        <StatusMessage animation={animation} />
      </div>
    </div>
  );
});

CarItem.displayName = 'CarItem';

export default CarItem;
