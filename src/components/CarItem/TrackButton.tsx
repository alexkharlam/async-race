import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
  classname: string;
};

export default function Button({
  children,
  disabled,
  onClick,
  classname,
}: Props) {
  const btnClass = classNames(
    classname,
    'disabled:bg-gray-600 px-1.5 py-1 rounded-md hover:bg-opacity-90 flex gap-0.5 items-center transition-all duration-100 text-gray-100 rounded-sm',
  );

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={btnClass}
    >
      {children}
    </button>
  );
}
