import { Race } from '../../types/types.ts';
import TextButton from '../ui/TextButton.tsx';

type Props = {
  race: Race;
  onStartRace: () => void;
  onReset: () => void;
};

export default function RaceButtons({ race, onStartRace, onReset }: Props) {
  return (
    <div className="my-2 flex gap-2">
      <TextButton
        disabled={race.isRacing || !race.isResetted}
        onClick={onStartRace}
      >
        start race
      </TextButton>
      <TextButton disabled={race.isResetted || race.isRacing} onClick={onReset}>
        Reset
      </TextButton>
    </div>
  );
}
