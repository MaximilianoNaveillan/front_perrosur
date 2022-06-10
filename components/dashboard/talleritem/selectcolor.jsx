import Select from 'react-select';

const colourStyles = {
  option: (styles, { isFocused }) =>
    // const color = chroma(data.color);
    // console.log({ data, isDisabled, isFocused, isSelected });
    ({
      ...styles,
      backgroundColor: isFocused ? '#999999' : null,
      color: '#333333',
    }),
};

function ColorSelect({ colors, handleChangeColorSelect }) {
  const colourOptions = [
    { value: 'rgb(255,255,255)', label: 'Blanco' },
    { value: colors.green, label: 'Verde' },
    { value: colors.pink, label: 'Rosa' },
    { value: colors.primary, label: 'Primario' },
    { value: colors.primary_darken, label: 'Primario oscuro' },
    { value: colors.secondary, label: 'Secundario' },
    { value: colors.secondary_darken, label: 'Secundario oscuro' },
    { value: colors.secondary_lighten, label: 'Secundario ligero' },
  ];
  const handleChange = (e) => {
    const rgb = e.value
      .substring(4, e.value.length - 1)
      .replace(/ /g, '')
      .split(',');
    const R = Number(rgb[0]);
    const G = Number(rgb[1]);
    const B = Number(rgb[2]);
    const rhex = R.toString(16).padStart(2, '0');
    const ghex = G.toString(16).padStart(2, '0');
    const bhex = B.toString(16).padStart(2, '0');

    if (rhex.length > 2 || ghex.length > 2 || bhex.length > 2) return;
    handleChangeColorSelect(`#${rhex}${ghex}${bhex}`);
  };
  return (
    <Select
      defaultValue={colourOptions[0]}
      label="Single select"
      options={colourOptions}
      styles={colourStyles}
      onChange={(e) => handleChange(e)}
      menuPlacement="top"
    />
  );
}

export default ColorSelect;
