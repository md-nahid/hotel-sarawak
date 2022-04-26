import styled from "styled-components";

export const RangeBox = styled.div`
  span.MuiSlider-rail {
    background: grey;
    height: 7px;
    border-radius: 0px;
  }
  span.MuiSlider-track {
    background: #f04135;
    height: 7px;
    border: none;
  }
  span.MuiSlider-thumb {
    background: #f04135;
    width: 25px;
    height: 25px;
  }
`;

export const Scrollbar = styled.div`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #bbb;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f04135;
    border-radius: 10px;
  }
`;
