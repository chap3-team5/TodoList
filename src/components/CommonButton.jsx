import React from 'react';
import styled from 'styled-components';

const CommonButton = ({
  children,
  borderColor,
  onClick,
  width,
  height,
  borderRadius,
}) => {
  return (
    <div>
      <CmonButton
        borderColor={borderColor}
        onClick={onClick}
        width={width}
        height={height}
        borderRadius={borderRadius}
      >
        {children}
      </CmonButton>
    </div>
  );
};

const CmonButton = styled.button`
  border: 1px solid ${(props) => props.borderColor};
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
`;

export default CommonButton;
