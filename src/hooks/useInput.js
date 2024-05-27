import { useState } from "react";
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const inputBinds = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  const resetValue = () => {
    setValue("");
  };
  return [value, setValue, inputBinds, resetValue];
}

export default useInput;
