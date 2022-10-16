import React from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";

const Header = () => {
  return (
    <StContainer>
      <HiHome size="24" />
      <StTitle>My Todo List</StTitle>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  border-bottom: 1px solid #ddd;
  height: 50px;
  display: flex;
  align-items: center;
`;

const StTitle = styled.div`
  font-size: 24px;
  padding-left: 10px;
`;
