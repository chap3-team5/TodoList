import React from 'react';
import { HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex ml-2 mt-3 pb-3 border-b-2">
      <HiHome onClick={() => navigate('/')} size="24" />
      <div className="font-serif text-xl ml-2">My Todo List</div>
    </div>
  );
};
export default Header;
