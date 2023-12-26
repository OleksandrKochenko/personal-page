import useWindowSizes from 'components/hooks/useWindowSizes';
import avatar from '../../img/photo_cv.jpg';
import './main.nav.scss';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const MainNav = () => {
  const { width: screenWidth } = useWindowSizes();
  return (
    <nav className="main_menu">
      {screenWidth > 800 ? (
        <ul className="navigation_list">
          <li className="navigation_item">home</li>
          <li className="navigation_item">projects</li>
          <li className="navigation_item">services</li>
          <li className="navigation_item">certificates</li>
          <li className="navigation_item">interests</li>
        </ul>
      ) : (
        <IconButton>
          <MenuRoundedIcon />
        </IconButton>
      )}

      <div className="avatar_wraper">
        <img className="avatar" alt="Alex Kochenko" src={avatar} />
      </div>
    </nav>
  );
};
