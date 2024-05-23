import { useState } from 'react';
import { NewWinner, RaceStatus } from '../types/types.ts';
import { createUpdateWinner } from '../utils/api.ts';

function useRaceStatus() {
  const [raceStatus, setRaceStatus] = useState<RaceStatus>({
    isRacing: false,
    winner: null,
    isResetted: true,
  });

  const setRaceStarted = () => {
    setRaceStatus({ isRacing: true, winner: null, isResetted: false });
  };

  const setRaceResetted = () => {
    setRaceStatus({
      isRacing: false,
      winner: null,
      isResetted: true,
    });
  };

  const handleCarFinished = async (winner: NewWinner) => {
    if (!raceStatus.isRacing) return;

    await createUpdateWinner(winner);

    setRaceStatus((prevState) => ({
      ...prevState,
      isRacing: false,
      winner: { name: winner.name, id: winner.id },
    }));
  };

  return { setRaceResetted, setRaceStarted, handleCarFinished, raceStatus };
}

export default useRaceStatus;
