import { Avatar, IconButton } from '@mui/material';
import avatar from '../../img/photo_cv.jpg';
import './main.nav.scss';

export const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>home</li>
        <li>commercial projects</li>
        <li>pet projects</li>
        <li>certificates</li>
        <li>hobby & interests</li>
      </ul>
      <IconButton>
        <Avatar alt="Alex Kochenko" src={avatar} />
      </IconButton>
    </nav>
  );
};
