import { toast } from 'react-toastify';
import api from '../utils/api.ts';
import toastErrors from '../data/toastErrors.ts';

function useCreateCar() {
  const createCar = async (
    name: string,
    color: string,
    toggleModal: () => void,
    onCarUpdate: () => void,
  ) => {
    try {
      await api.createCar(color, name);

      onCarUpdate();
      toggleModal();
    } catch (err) {
      toast.error(toastErrors.createCar.text, { toastId: toastErrors.createCar.id });
    }
  };

  return createCar;
}

export default useCreateCar;
