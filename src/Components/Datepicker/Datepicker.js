import React from "react";
import { DatePickerStyle } from "./Datepicker.styled";
// import react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Datepicker({ selected, onChange }) {
  return (
    <DatePickerStyle>
      <DatePicker dateFormat="dd - MM - yyyy" selected={selected} onChange={onChange} />
    </DatePickerStyle>
  );
}
