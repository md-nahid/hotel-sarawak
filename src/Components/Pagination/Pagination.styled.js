import styled from "styled-components";

const Wrapper = styled.div`
  .paginationContainer {
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      @media (min-width: 576px) {
        justify-content: end;
      }
      li {
        border: none;
        border-radius: 50%;
        margin: 0 5px;
        :hover {
          background: #ffefe7;
        }
        a {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 50%;
          text-decoration: none;
          color: #4c6870;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          font-family: "Lato", sans-serif;
        }
      }
      .activeBtn {
        background: #f04135;
        a {
          color: #ffffff;
        }
      }
      .disabledBtn {
        opacity: 0.3;
        color: #ffffff;
        background: #f04135;
        :hover {
          background: #f04135;
        }
        a {
          cursor: not-allowed;
        }
      }
    }
    .paginationView {
      display: flex;
      align-items: center;
      color: #4c6870;
      font-size: 18px;
      font-weight: 400;
      p {
        span {
          margin: 0 10px;
        }
      }
    }
  }
`;

export default Wrapper;
