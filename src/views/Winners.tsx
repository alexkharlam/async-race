import { useEffect, useState } from 'react';
import { getWinnersWithCarData } from '../utils/api.ts';
import type { WinnerWithCarData } from '../types/types.ts';
import WinnersTable from '../components/WinnersTable.tsx';

export default function Winners() {
  const [winners, setWinners] = useState<WinnerWithCarData[]>();

  useEffect(() => {
    const initWinners = async () => {
      const winnersData = await getWinnersWithCarData();

      setWinners(winnersData);
    };

    initWinners();
  }, []);

  if (!winners || winners.length <= 0) return <p>No winners</p>;

  return (
    <div className="px-2">
      <h1 className="text-2xl mt-2 mb-3 font-bold">{`${winners.length} winners`}</h1>
      <WinnersTable winners={winners} />
    </div>
  );
}
