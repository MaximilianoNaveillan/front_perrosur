import Select from 'react-select';

function Eselect({ handleChange, arr }) {
  const handleChangeItem = (e) => {
    const { value } = e;
    handleChange(value);
  };

  return (
    <Select
      label="Single select"
      options={arr}
      placeholder="CATEGORÍA ..."
      onChange={(e) => handleChangeItem(e)}
      menuPlacement="top"
    />
  );
}

export default Eselect;
