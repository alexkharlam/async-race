import { Car } from '../../types/types.ts';
import Track from './Track.tsx';
import StatusMessage from './StatusMessage.tsx';
import MoveButtons from './MoveButtons.tsx';
import ManageCarButtons from './ManageCarButtons.tsx';
import useAnimation from '../../hooks/useAnimation.tsx';

type Props = {
  car: Car;
  onUpdate: () => void;
};

export default function CarItem({ car, onUpdate }: Props) {
  const { animation, handleFinish, handleStart, handleStop, handleUpdate } =
    useAnimation(car);

  return (
    <div className="mb-2">
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
