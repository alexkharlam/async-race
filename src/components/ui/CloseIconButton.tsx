import { X } from 'react-feather';

type Props = {
  onClick: () => void;
};

export default function CloseIconButton({ onClick }: Props) {
  return (
    <button
      className="absolute text-1xl -top-1.5 -right-1.5 bg-pink-700 rounded-full text-white"
      type="button"
      onClick={onClick}
    >
      <X />
    </button>
  );
}
