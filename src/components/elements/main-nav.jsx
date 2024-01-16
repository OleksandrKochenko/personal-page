import useWindowSizes from 'components/hooks/useWindowSizes';
import avatar from '../../img/photo_cv.jpg';
import './main.nav.scss';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { DrawerMenu } from './drawer-menu';
import { MenuList } from './menu-list';

export const MainNav = () => {
  const { width: screenWidth } = useWindowSizes();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <nav className="main_menu">
      {screenWidth > 1000 ? (
        <MenuList />
      ) : (
        <IconButton onClick={openDrawer}>
          <MenuRoundedIcon />
        </IconButton>
      )}

      <div className="avatar_wraper">
        <img className="avatar" alt="Alex Kochenko" src={avatar} />
      </div>
      <DrawerMenu open={drawerOpen} onClose={closeDrawer} />
    </nav>
  );
};
