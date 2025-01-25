import { Drawer } from '@mui/material';
import { Contacts } from './contacts';
import '../../index.css';
import '../../main.scss';

export const DrawerContacts = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Contacts />
    </Drawer>
  );
};
