import { RaceStatus } from '../../types/types.ts';
import TextButton from '../ui/TextButton.tsx';

type Props = {
  raceStatus: RaceStatus;
  onStartRace: () => void;
  onReset: () => void;
};

export default function RaceButtons({ raceStatus, onStartRace, onReset }: Props) {
  return (
    <div className="order-3 md:order-none col-span-full md:col-span-1 flex gap-2 justify-self-center">
      <TextButton disabled={raceStatus.isRacing || !raceStatus.isResetted} onClick={onStartRace}>
        start race
      </TextButton>
      <TextButton disabled={raceStatus.isResetted} onClick={onReset}>
        Reset
      </TextButton>
    </div>
  );
}
