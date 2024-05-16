import axios from 'axios';

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
