import { useEffect, useState } from 'react';
import './line-loader.scss';

export const LineLoader = ({ handleScip }) => {
  const text = ['alex', 'kochenko', 'full stack', 'developer'];
  const [currentText, setCurrentText] = useState(text[0]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentText(text[1]);
    }, 3150);

    const timer2 = setTimeout(() => {
      setCurrentText(text[2]);
    }, 6150);

    const timer3 = setTimeout(() => {
      setCurrentText(text[3]);
    }, 9150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- should execute once on load
  }, []);

  return (
    <div className="wraper">
      <div className="loading_container">
        <div className="loading-text">
          <span>{currentText.toUpperCase()}</span>
        </div>
      </div>
      <div className="skip" onClick={handleScip}>
        skip
      </div>
    </div>
  );
};
