import { useEffect } from 'react';
import { Car, Race } from '../../types/types.ts';
import Track from './Track.tsx';
import StatusMessage from './StatusMessage.tsx';
import MoveButtons from './MoveButtons.tsx';
import ManageCarButtons from './ManageCarButtons.tsx';
import useAnimation from '../../hooks/useAnimation.tsx';

type Props = {
  car: Car;
  onUpdate: () => void;
  race: Race;
  onFinish: (name: string, id: number) => void;
};

export default function CarItem({ car, onUpdate, race, onFinish }: Props) {
  const { animation, handleFinish, handleStart, handleStop, handleUpdate } =
    useAnimation(car, onFinish);

  useEffect(() => {
    if (race.isResetted) {
      handleStop();
    }

    if (race.isRacing) {
      handleStart();
    }
  }, [race, handleStart, handleStop]);

  return (
    <div className="mb-3">
      <div className="flex gap-1 relative items-center mb-2">
        <ManageCarButtons onUpdate={onUpdate} car={car} />
        <MoveButtons
          animation={animation}
          onStart={handleStart}
          onStop={handleStop}
        />
        <Track
          animation={animation}
          onComplete={handleFinish}
          onUpdate={handleUpdate}
          car={car}
        />
        <StatusMessage animation={animation} />
      </div>
    </div>
  );
}
