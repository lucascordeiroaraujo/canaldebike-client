import styled from 'styled-components';

export default styled.header`
  width: 100%;
  height: 120px;
  position: relative;
  background: #222221;
  &:before {
    content: '';
    width: 26%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: #ffffff;
  }
  div.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    img {
      width: 100%;
      height: auto;
      max-width: 307px;
    }
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      ul {
        list-style: none;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: 9%;
        li {
          height: 100%;
          border-bottom: 5px solid #222221;
          margin-left: 35px;
          a {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              width: 100%;
              text-transform: uppercase;
              font-size: 18px;
              color: #ffffff;
              text-align: center;
              font-family: 'BrandonGrotesqueMedium';
            }
          }
          &.active {
            border-bottom: 5px solid #90b13a;
          }
        }
      }
      form {
        position: relative;
        input {
          width: 255px;
          height: 45px;
          border-radius: 30px;
          border: none;
          font-size: 16px;
          color: #222221;
          padding: 15px;
          font-family: 'BrandonGrotesqueMedium';
          background: #ffffff;
          &::placeholder {
            color: #222221;
          }
        }
        button {
          position: absolute;
          top: 50%;
          right: 17px;
          transform: translate(0px, -50%);
          text-indent: -9999px;
          content: '\e900';
          font-family: 'icomoon';
          padding: 0px;
          border: none;
          cursor: pointer;
          background: transparent;
        }
      }
    }
  }
`;
