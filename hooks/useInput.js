import { useState, useCallback } from 'react';

function useInput(initValue = null) {
  const [input, setInput] = useState(initValue);
  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  return [input, onChange];
}

export default useInput;
