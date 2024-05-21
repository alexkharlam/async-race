import { useState } from 'react';

function useModal() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((state) => !state);
  };

  return { open, toggleModal };
}

export default useModal;
