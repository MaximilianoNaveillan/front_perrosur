import Select from 'react-select';

function CatSelect({ handleChangeCategori, cat }) {
  const handleChange = (e) => {
    const { value } = e;
    handleChangeCategori(value);
  };

  return (
    <Select
      label="Single select"
      options={cat}
      placeholder="CATEGORÍA ..."
      onChange={(e) => handleChange(e)}
      menuPlacement="top"
    />
  );
}

export default CatSelect;
