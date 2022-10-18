import React from 'react';

const HomeBox = ({ title, onClick }) => {
  return (
    <div
      className="border-none shadow-xl w-80 h-52 rounded-lg mr-10 hover:bg-slate-200 hover:text-white cursor-pointer font-bold font-serif  items-center text-center pt-24 text-2xl"
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default HomeBox;
