import { Home, Star } from 'react-feather';
import { useLocation } from 'react-router-dom';
import routerPaths from '../../data/routerPaths.ts';
import appLogo from '../../assets/app-logo.svg';
import NavLink from '../ui/NavLink.tsx';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex py-2 px-3 justify-between items-center relative border-[1px] border-blue-950">
      <nav className="flex sm:gap-4 gap-2">
        <NavLink LinkIcon={Home} pathname={pathname} to={routerPaths.garage}>
          Garage
        </NavLink>
        <NavLink LinkIcon={Star} pathname={pathname} to={routerPaths.winners}>
          Winners
        </NavLink>
      </nav>
      <img className="w-6" src={appLogo} alt="Logo" />
    </header>
  );
}
