import React from 'react';
import Select from 'react-select';

export default function CustomSelect({ options, onChange }) {
  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={onChange}
      className="select-container"
      classNamePrefix="select"
      placeholder="Select Country"
    />
  );
}

const customStyles = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menuList: (provided) => ({
    ...provided,
    color: '#000000',
  }),
  control: (provided) => ({
    ...provided,
    border: 'none',
    height: '44px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#f14135b0' : 'transparent',
    cursor: 'pointer',
  }),
};
