import classNames from 'classnames';
import { Icon } from 'react-feather';

type Props = {
  ButtonIcon: Icon;
  disabled: boolean;
  onClick: () => void;
  classname: string;
};

export default function IconButton({
  ButtonIcon,
  disabled,
  onClick,
  classname,
}: Props) {
  const btnClass = classNames(
    'disabled:bg-gray-600 rounded-sm p-1.5',
    classname,
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={btnClass}
      type="button"
    >
      <ButtonIcon color="white" fill="white" size={20} />
    </button>
  );
}
