import { useState } from 'react';
import './tooltip.scss';

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = useState(false);

  return (
    <div className="tooltip_wraper">
      <div className="tooltip" style={show ? { display: 'block' } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
