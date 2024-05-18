import { useState } from 'react';
import { Race } from '../types/types.ts';

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

  const handleCarFinished = (name: string, id: number) => {
    if (!race.isRacing) return;
    setRace((prevState) => ({
      ...prevState,
      isRacing: false,
      winner: { name, id },
    }));
  };

  return { startRace, resetRace, handleCarFinished, race };
}

export default useRace;
