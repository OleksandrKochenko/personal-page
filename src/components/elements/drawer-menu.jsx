import { Drawer } from '@mui/material';
import { MenuList } from './menu-list';
import './drawer.menu.scss';
import '../../index.css';
import '../../main.scss';

export const DrawerMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <MenuList onClose={onClose} />
    </Drawer>
  );
};
