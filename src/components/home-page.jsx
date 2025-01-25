import { About } from './elements/about';
import { ServicesShort } from './elements/services.short';
import { TechStack } from './elements/tech-stack';
import '../index.css';
import '../main.scss';

const HomePage = () => {
  return (
    <>
      <About />
      <TechStack />
      <ServicesShort />
    </>
  );
};

export default HomePage;
