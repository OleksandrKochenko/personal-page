import './home.page.scss';

import avatar from '../../img/photo_cv.jpg';

export const About = () => {
  return (
    <div className="section_wraper">
      <h3 className="section_title">About me</h3>
      <div className="about">
        <div className="about_info">
          <p>
            Responsibility, efficiency and attention for details are my main
            strength. <br />I have great communication skills, analytical mind,
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
        </div>
        <div className="avatar_wraper">
          <img className="avatar" alt="Alex Kochenko" src={avatar} />
        </div>
      </div>
    </div>
  );
};
