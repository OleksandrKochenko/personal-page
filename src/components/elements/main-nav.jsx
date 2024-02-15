import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import useWindowSizes from 'components/hooks/useWindowSizes';
import { DrawerMenu } from './drawer-menu';
import { MenuList } from './menu-list';
import { DrawerContacts } from './drawer-contacts';
import connect from '../../img/customer-support-11322.svg';
import './main.nav.scss';

export const MainNav = () => {
  const { width: screenWidth } = useWindowSizes();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contactsSidebar, setContactsSidebar] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const openContacts = () => {
    setContactsSidebar(true);
  };

  const closeContacts = () => {
    setContactsSidebar(false);
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

      <IconButton onClick={openContacts}>
        <Tooltip
          title={<p className="contacts_tooltip">Get in touch</p>}
          placement="left"
        >
          <img
            className="img_filter"
            src={connect}
            alt="Get in touch"
            width={60}
            height={60}
          />
        </Tooltip>
      </IconButton>

      <DrawerMenu open={drawerOpen} onClose={closeDrawer} />
      <DrawerContacts open={contactsSidebar} onClose={closeContacts} />
    </nav>
  );
};
