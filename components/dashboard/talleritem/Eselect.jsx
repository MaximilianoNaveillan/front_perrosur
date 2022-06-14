import { useEffect, useState } from 'react';
import Select from 'react-select';

function Eselect({
  name,
  handleChange,
  defaultValue,
  arr,
  placeholder,
  bottom,
}) {
  const [dv, setDv] = useState(arr.find((ele) => ele.value === defaultValue));
  const handleChangeSelect = (e) => {
    const { value } = e;
    handleChange({ value, name });
  };
  arr.find((ele) => ele.value === defaultValue);

  useEffect(() => {
    setDv(arr.find((ele) => ele.value === defaultValue));
  }, [defaultValue]);
  return (
    <Select
      defaultValue={dv}
      value={dv}
      label="Single select"
      options={arr}
      placeholder={placeholder}
      onChange={(e) => handleChangeSelect(e)}
      menuPlacement={bottom ? 'bottom' : 'top'}
    />
  );
}

export default Eselect;
