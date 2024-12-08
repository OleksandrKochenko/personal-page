import { useState } from 'react';
import { ChevronsLeft } from 'react-feather';
import { DrawerContacts } from './drawer-contacts';
import './home.page.scss';

export const About = () => {
  const [contactsSidebar, setContactsSidebar] = useState(false);

  const openContacts = () => {
    setContactsSidebar(true);
  };
  const closeContacts = () => {
    setContactsSidebar(false);
  };

  return (
    <div className="section_wraper">
      <h3 className="section_title">About me</h3>
      <div className="about">
        <div className="about_info">
          <p>
            I bring a strong sense of responsibility, efficiency, and attention
            to detail to every project. With strong communication, analytical,
            organizational, and project management skills, I offer a
            well-rounded approach to every task and team environment.
          </p>
          <p>
            As a Full Stack Developer, I have expertise in the latest front-end
            and back-end technologies, allowing me to build dynamic, modern, and
            efficient solutions.
          </p>
          <p>
            My work experience has given me strong self-organization skills, a
            reliable sense of responsibility, and practical experience in
            managing projects, meeting deadlines, and solving challenges.
          </p>
          <p className="get_contacts" onClick={openContacts}>
            <ChevronsLeft size={28} className="link_arrow" />
            <span className="link_text">Get in touch</span>
          </p>
        </div>
        {/* <div className="avatar_wraper">
          <img className="avatar" alt="Alex Kochenko" src={avatar} />
        </div> */}
      </div>
      <DrawerContacts open={contactsSidebar} onClose={closeContacts} />
    </div>
  );
};
