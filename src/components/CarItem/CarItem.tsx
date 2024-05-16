import { useRef, useState } from 'react';
import anime, { AnimeInstance } from 'animejs';
import axios from 'axios';
import { Car, CarStatus } from '../../types/types.ts';
import config from '../../data/config.ts';
import Track from './Track.tsx';
import StatusMessage from './StatusMessage.tsx';
import MoveButtons from './MoveButtons.tsx';
import ManageCarButtons from './ManageCarButtons.tsx';

const { BASE_URL, TRACK_LENGTH } = config;

type Props = {
  car: Car;
  onUpdate: () => void;
};

export default function CarItem({ car, onUpdate }: Props) {
  const carRef = useRef<HTMLImageElement | null>(null);
  const [status, setStatus] = useState<CarStatus>('ready');
  let instance: AnimeInstance | null = null;

  const handleStart = async () => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}/engine/?id=${car.id}&status=started`,
      );
      const duration = data.distance / data.velocity;

      instance = anime({
        targets: carRef.current,
        translateX: `${TRACK_LENGTH}px`,
        duration,
        easing: 'linear',
        complete: () => {
          setStatus('finished');
          //   onFinish(car.id);
        },
      });

      await axios.patch(`${BASE_URL}/engine/?id=${car.id}&status=drive`);
    } catch (err) {
      if (instance) setStatus('broken');
      instance?.pause();
    }
  };
  const handleStop = async () => {
    await axios.patch(`${BASE_URL}/engine/?id=${car.id}&status=stopped`);
    instance?.pause();
    instance = null;
    if (carRef.current) carRef.current.style.transform = 'translateX(0px)';
    setStatus('ready');
  };

  return (
    <div className="mb-2">
      <div className="flex gap-1 relative items-center mb-2">
        <ManageCarButtons onUpdate={onUpdate} car={car} />
        <MoveButtons
          status={status}
          onStart={handleStart}
          onStop={handleStop}
        />
        <Track status={status} car={car} carRef={carRef} />
        <StatusMessage status={status} />
      </div>
    </div>
  );
}
