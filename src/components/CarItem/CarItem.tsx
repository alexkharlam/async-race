import { useRef, useState } from 'react';
import { Play, StopCircle } from 'react-feather';

import anime, { AnimeInstance } from 'animejs';
import axios from 'axios';
import { Car, CarStatus } from '../../types/types.ts';
import config from '../../data/config.ts';
import TrackButton from './TrackButton.tsx';
import Track from './Track.tsx';
import StatusMessage from './StatusMessage.tsx';

const { BASE_URL, TRACK_LENGTH } = config;

type Props = {
  car: Car;
};

export default function CarItem({ car }: Props) {
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
      <div className="flex gap-1.5 relative items-center mb-2">
        <TrackButton
          classname="bg-green-700"
          onClick={handleStart}
          disabled={status === 'running'}
        >
          <Play />
          Start
        </TrackButton>
        <TrackButton
          classname="bg-red-700"
          onClick={handleStop}
          disabled={status === 'running'}
        >
          <StopCircle />
          Stop
        </TrackButton>
        <Track status={status} car={car} carRef={carRef} />
        <StatusMessage status={status} />
      </div>
    </div>
  );
}
