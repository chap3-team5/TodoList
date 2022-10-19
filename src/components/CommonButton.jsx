import React from 'react';

const CommonButton = ({ css, children, ...props }) => {
  console.log(css);
  return (
    <div>
      <button {...props} className={`${css}`}>
        {children}
      </button>
    </div>
  );
};

export default CommonButton;
