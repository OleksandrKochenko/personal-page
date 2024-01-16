import { Drawer } from '@mui/material';
import './drawer.menu.scss';
import { MenuList } from './menu-list';

export const DrawerMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <MenuList onClose={onClose} />
    </Drawer>
  );
};
