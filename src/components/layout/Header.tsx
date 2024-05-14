import { useLocation } from 'react-router-dom';
import routerPaths from '../../data/routerPaths.ts';
import garageIcon from '../../assets/garage-icon.png';
import winnerIcon from '../../assets/winner-icon.png';
import appLogo from '../../assets/highres-logo.png';
import ImgNavLink from '../ui/ImgNavLink.tsx';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex py-3 px-3 justify-between items-center border-b-2 border-gray-400">
      <nav className=" flex gap-4">
        <ImgNavLink
          pathname={pathname}
          to={routerPaths.garage}
          imgSrc={garageIcon}
          imgAlt="garage"
        >
          Garage
        </ImgNavLink>
        <ImgNavLink
          pathname={pathname}
          to={routerPaths.winners}
          imgSrc={winnerIcon}
          imgAlt="garage"
        >
          Winners
        </ImgNavLink>
      </nav>
      <img className="w-8 h-full" src={appLogo} alt="Logo" />
    </header>
  );
}
