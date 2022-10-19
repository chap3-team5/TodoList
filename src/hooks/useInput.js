import React, { useCallback, useState } from 'react';

const useInput = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handler = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, handler, reset];
};

export default useInput;
