import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  imgSrc: string;
  imgAlt: string;
  children: ReactNode;
  pathname: string;
};

export default function ImgNavLink({
  to,
  imgSrc,
  imgAlt,
  children,
  pathname,
}: Props) {
  const isActivePath = pathname === to;

  const linkClass = classNames(
    'flex flex-col md:w-5 w-3.5 items-center hover:scale-105 transition-all duration-150',
    { 'opacity-60': !isActivePath },
  );

  return (
    <Link className={linkClass} to={to}>
      <img className="w-full" width="110px" src={imgSrc} alt={imgAlt} />
      <span className="font-semibold text-base md:text-2xl">{children}</span>
    </Link>
  );
}
