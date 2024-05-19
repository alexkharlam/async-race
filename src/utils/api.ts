import axios from 'axios';
import { WinnerData } from '../types/types.ts';

const BASE_URL = 'http://127.0.0.1:3000';

// Cars
export const getCars = async () => {
  const res = await axios.get(`${BASE_URL}/garage`);

  return res;
};

export const getCar = async (carId: string) => {
  const res = await axios.get(`${BASE_URL}/garage/${carId}`);

  return res.data;
};

export const createCar = async (color: string, name: string) => {
  const res = await axios.post(`${BASE_URL}/garage`, { name, color });

  return res;
};

export const deleteCar = async (carId: number) => {
  const res = await axios.delete(`${BASE_URL}/garage/${carId}`);

  return res.data;
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
export const getWinners = async () => {
  const res = await axios.get(`${BASE_URL}/winners`);

  return res;
};

const getWinner = async (carId: number) => {
  const res = await axios.get(`${BASE_URL}/winners/${carId}`);

  return res;
};

const createWinner = async (winner: WinnerData) => {
  const res = await axios.post(`${BASE_URL}/winners`, {
    id: winner.id,
    wins: 1,
    time: winner.duration,
  });

  return res;
};

const updateWinner = async (
  winner: WinnerData,
  oldBestTime: number,
  oldWins: number,
) => {
  const newTime = winner.duration < oldBestTime ? winner.duration : oldBestTime;

  const res = await axios.put(`${BASE_URL}/winners/${winner.id}`, {
    wins: oldWins + 1,
    time: newTime,
  });

  return res;
};

export const createUpdateWinner = async (winner: WinnerData) => {
  try {
    const res = await getWinner(winner.id);

    const { time: oldBestTime, wins: oldWins } = res.data;

    await updateWinner(winner, oldBestTime, oldWins);
  } catch (err) {
    if (!axios.isAxiosError(err)) {
      console.error(err);
      return;
    }

    if (err.response?.status === 404) {
      await createWinner(winner);
    }
  }
};
