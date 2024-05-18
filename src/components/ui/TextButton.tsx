import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export default function TextButton({ children, onClick, disabled }: Props) {
  const btnClass = classNames(
    'text-base font-bold text-blue-primary uppercase disabled:text-gray-300 disabled:bg-opacity-50',
  );

  return (
    <button
      className={btnClass}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

TextButton.defaultProps = {
  disabled: false,
};
