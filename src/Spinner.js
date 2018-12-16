import React from 'react';

const Spinner = ({
  size = 'md',            // (xsm|sm|md)
  color = 'primary',      // (primary|white)
  display = 'inline'    // (centered|inline)
}) => {

  const classes = `
    Spinner
    Spinner--color-${color}
    Spinner--size-${size}
    Spinner--display-${display}
  `;

  return (
    <div className={classes}>
      <svg className="Spinner__svg" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="Spinner__path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
  )

  
}

export default Spinner;