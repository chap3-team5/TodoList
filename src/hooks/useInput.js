import React, { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState();

  const handler = (event) => {
    setValue(event.target.value);
  };
  return [value, handler];
};

export default useInput;
