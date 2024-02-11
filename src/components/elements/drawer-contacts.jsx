import { Drawer } from '@mui/material';
import { Contacts } from './contscts';
// import './drawer.menu.scss';

export const DrawerContacts = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Contacts />
    </Drawer>
  );
};
