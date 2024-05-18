import classNames from 'classnames';
import { Race } from '../types/types.ts';

type Props = {
  race: Race;
  onStartRace: () => void;
  onReset: () => void;
};

export default function RaceButtons({ race, onStartRace, onReset }: Props) {
  const btnClass = classNames(
    'px-3 py-2 bg-yellow-600 hover:bg-opacity-90 rounded-sm text-1xl text-white disabled:bg-gray-600',
  );

  return (
    <div className="my-2 flex gap-2">
      <button
        className={btnClass}
        disabled={race.isRacing || !race.isResetted}
        onClick={onStartRace}
        type="button"
      >
        RACE!
      </button>
      <button
        className={btnClass}
        disabled={race.isResetted || race.isRacing}
        onClick={onReset}
        type="button"
      >
        Reset
      </button>
    </div>
  );
}
