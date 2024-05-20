import axios from 'axios';
import {
  Car,
  Cars,
  NewWinner,
  WinnerData,
  WinnerWithCarData,
  WinnersData,
} from '../types/types.ts';

const BASE_URL = 'http://127.0.0.1:3000';

const getWinner = async (carId: number) => {
  const res = await axios.get(`${BASE_URL}/winners/${carId}`);

  return res;
};

// Cars
export const getCars = async (): Promise<Cars> => {
  const res = await axios.get<Cars>(`${BASE_URL}/garage`);

  return res.data;
};

export const getCar = async (carId: number): Promise<Car> => {
  const res = await axios.get<Car>(`${BASE_URL}/garage/${carId}`);

  return res.data;
};

export const createCar = async (color: string, name: string) => {
  const res = await axios.post(`${BASE_URL}/garage`, { name, color });

  return res;
};

export const deleteCar = async (carId: number) => {
  try {
    await axios.delete(`${BASE_URL}/garage/${carId}`);
    await getWinner(carId);

    await axios.delete(`${BASE_URL}/winners/${carId}`);
  } catch (err) {
    if (!axios.isAxiosError(err)) return;

    if (err.response?.status !== 404) {
      throw new Error('Failed to delete a car');
    }
  }
};

export const updateCar = async (carId: number, color: string, name: string) => {
  const res = await axios.put(`${BASE_URL}/garage/${carId}`, { name, color });

  return res.data;
};

// Drive
export const requestRace = async (carId: string, status: string) => {
  const res = await axios.patch(`${BASE_URL}/engine`, null, {
    params: { id: carId, status },
  });

  return res.data;
};

// WINNERS
export const getWinners = async (): Promise<WinnersData> => {
  const res = await axios.get<WinnersData>(`${BASE_URL}/winners`);

  return res.data;
};

const createWinner = async (winner: NewWinner) => {
  const res = await axios.post(`${BASE_URL}/winners`, {
    id: winner.id,
    wins: 1,
    time: winner.duration,
  });

  return res;
};

const updateWinner = async (winner: NewWinner, oldBestTime: number, oldWins: number) => {
  const newTime = winner.duration < oldBestTime ? winner.duration : oldBestTime;

  const res = await axios.put(`${BASE_URL}/winners/${winner.id}`, {
    wins: oldWins + 1,
    time: newTime,
  });

  return res;
};

export const createUpdateWinner = async (winner: NewWinner) => {
  try {
    const res = await getWinner(winner.id);

    const { time: oldBestTime, wins: oldWins } = res.data;

    await updateWinner(winner, oldBestTime, oldWins);
  } catch (err) {
    if (!axios.isAxiosError(err)) return;

    if (err.response?.status === 404) {
      await createWinner(winner);
    }
  }
};

export const getWinnersWithCarData = async (): Promise<WinnerWithCarData[]> => {
  const winners = await getWinners();

  const carRequests = winners.map((winner) => getCar(winner.id));

  const carResponses = await Promise.all(carRequests);

  const winnersWithCarNames: WinnerWithCarData[] = winners.map(
    (winner: WinnerData, index: number) => ({
      ...winner,
      name: carResponses[index].name,
      color: carResponses[index].color,
    }),
  );

  return winnersWithCarNames;
};
