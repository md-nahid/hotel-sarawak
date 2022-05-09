import styled from "styled-components";

export const DatePickerStyle = styled.div`
  margin-top: 20px;
  .react-datepicker-wrapper {
    position: relative;
    ::after {
      content: url("https://api.iconify.design/uil/calender.svg?color=%23ccd4d6");
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
    }
    input {
      border-radius: 5px;
      padding: 10px;
      font-size: 17px;
      font-weight: 400;
      color: #6b7280;
      width: 100%;
      outline: none;
      border: 2px solid #bbbbbb;
    }
  }
  .react-datepicker__triangle {
    display: none;
  }
`;
