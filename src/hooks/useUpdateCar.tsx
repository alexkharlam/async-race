import { toast } from 'react-toastify';
import api from '../utils/api.ts';
import toastErrors from '../data/toastErrors.ts';

function useUpdateCar() {
  const updateCar = async (
    carId: number,
    name: string,
    color: string,
    toggleModal: () => void,
    onCarUpdate: () => void,
  ) => {
    try {
      await api.updateCar(carId, color, name);
      toggleModal();
      onCarUpdate();
    } catch (err) {
      toast.error(toastErrors.updateCar.text, { toastId: toastErrors.deleteCar.id });
    }
  };

  return updateCar;
}

export default useUpdateCar;
