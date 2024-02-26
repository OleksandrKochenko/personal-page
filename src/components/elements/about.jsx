import { useState } from 'react';
import { ChevronsLeft } from 'react-feather';
import { DrawerContacts } from './drawer-contacts';
import avatar from '../../img/photo_cv.jpg';
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
            Responsibility, efficiency and attention to details are my main
            strengths. <br />I have great communication skills, analytical mind,
            organizational and project management skills.
          </p>
          <p>
            I am a Full Stack developer with proficiency in the most modern
            frontend and backend tools and technologies. <br />
            Previously, I changed my field of activity as I strive to constantly
            develop and learn new stuff.
          </p>
          <p>
            My previous work background gives me strong self-organization,
            task-responsibility skills, as well as good experience in managing
            projects, meeting deadlines and solving problem situations.
          </p>
          <p className="get_contacts" onClick={openContacts}>
            <ChevronsLeft size={28} className="link_arrow" />
            <span className="link_text">Get in touch</span>
          </p>
        </div>
        <div className="avatar_wraper">
          <img className="avatar" alt="Alex Kochenko" src={avatar} />
        </div>
      </div>
      <DrawerContacts open={contactsSidebar} onClose={closeContacts} />
    </div>
  );
};
