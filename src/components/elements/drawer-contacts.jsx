import { Drawer } from '@mui/material';
import { Contacts } from './contacts';

export const DrawerContacts = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Contacts />
    </Drawer>
  );
};
