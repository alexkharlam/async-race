import { toast } from 'react-toastify';
import api from '../utils/api.ts';
import toastErrors from '../data/toastErrors.ts';

function useDeleteCar() {
  const deleteCar = async (carId: number, onCarUpdate: () => void) => {
    try {
      await api.deleteCar(carId);
      onCarUpdate();
    } catch (err) {
      toast.error(toastErrors.deleteCar.text, { toastId: toastErrors.deleteCar.id });
    }
  };

  return deleteCar;
}

export default useDeleteCar;
