import { useState } from 'react';

function useTrueFalse(initState) {
  const [value, setValue] = useState(initState);

  function changeState(newValue) {
    setValue(newValue);
  }

  return { value, onChange: changeState };
}

export default useTrueFalse;
