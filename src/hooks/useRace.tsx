import { useState } from 'react';
import { Race, NewWinner } from '../types/types.ts';
import { createUpdateWinner } from '../utils/api.ts';

function useRace() {
  const [race, setRace] = useState<Race>({
    isRacing: false,
    winner: null,
    isResetted: true,
  });

  const startRace = () => {
    setRace({ isRacing: true, winner: null, isResetted: false });
  };

  const resetRace = () => {
    setRace({
      isRacing: false,
      winner: null,
      isResetted: true,
    });
  };

  const handleCarFinished = async (winner: NewWinner) => {
    if (!race.isRacing) return;

    // Request to add winner
    await createUpdateWinner(winner);

    setRace((prevState) => ({
      ...prevState,
      isRacing: false,
      winner: { name: winner.name, id: winner.id },
    }));
  };

  return { startRace, resetRace, handleCarFinished, race };
}

export default useRace;
