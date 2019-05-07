import React, { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    if (e.hasOwnProperty('target')) {
      setValue(e.target.value);
    } else {
      setValue('');
    }
  }

  return { value, handleValueChange };
}

export default useInput;
