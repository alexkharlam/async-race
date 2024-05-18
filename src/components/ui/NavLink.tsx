import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-feather';
import classNames from 'classnames';

type Props = {
  to: string;
  children: ReactNode;
  LinkIcon: Icon;
  pathname: string;
};

export default function NavLink({ to, children, LinkIcon, pathname }: Props) {
  const isActivePath = pathname === to;

  const linkClass = classNames(
    'flex gap-1.5 items-center transition-all duration-100',
    {
      'opacity-60 hover:text-blue-primary': !isActivePath,
    },
  );

  return (
    <Link className={linkClass} to={to}>
      <LinkIcon />
      <span className="font-semibold text-base">{children}</span>
    </Link>
  );
}
