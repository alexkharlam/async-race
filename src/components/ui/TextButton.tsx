import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export default function TextButton({
  children,
  onClick,
  disabled,
  className,
}: Props) {
  const btnClass = classNames(
    'px-3 py-2.5 bg-blue-primary uppercase hover:bg-opacity-90 rounded-sm text-base font-bold text-white disabled:bg-opacity-25 disabled:cursor-default',
    className,
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
  className: '',
};
