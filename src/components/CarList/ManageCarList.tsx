import { RaceStatus } from '../../types/types.ts';
import GenerateCars from './GenerateCars.tsx';
import NewCar from './NewCar.tsx';
import RaceButtons from './RaceButtons.tsx';

type Props = {
  allCarsLength: number;
  raceStatus: RaceStatus;
  onUpdate: () => void;
  onStartRace: () => void;
  onResetRace: () => void;
};

export default function ManageCarList({
  allCarsLength,
  raceStatus,
  onUpdate,
  onStartRace,
  onResetRace,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 grid-rows-2 md:grid-rows-1 items-center mt-2 mb-3.5 gap-y-3 md:gap-y-[0px]">
      <NewCar carsLength={allCarsLength} onCarsUpdate={onUpdate} />
      <RaceButtons raceStatus={raceStatus} onReset={onResetRace} onStartRace={onStartRace} />
      <GenerateCars onCarsUpdate={onUpdate} />
    </div>
  );
}
