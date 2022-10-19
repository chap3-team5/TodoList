import React from 'react';

const CommonButton = ({ children, ...props }) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};

export default CommonButton;
