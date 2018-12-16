import React from 'react';

const Spinner = ({
  size = 'md',            // (sm|md)
  color = 'primary',      // (primary|white)
  display = 'centered'    // (centered|inline)
}) => {

  const classes = `
    Spinner
    Spinner--color-${color}
    Spinner--size-${size}
    Spinner--display-${size}
  `;

  return (
    <div className={classes}>
      <svg className="Spinner__svg" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="Spinner__path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
  )
}

export default Spinner;