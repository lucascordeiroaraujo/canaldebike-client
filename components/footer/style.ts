import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  padding-top: 80px;
  margin-top: 100px;
  background: #222221;
  div.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    div {
      width: 25%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      img {
        max-width: 100%;
        height: auto;
      }
      strong {
        font-family: 'BrandonGrotesqueBlack';
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 20px;
        text-transform: uppercase;
      }
      ul {
        display: flex;
        flex-direction: column;
        li:not(:last-child) {
          margin-bottom: 15px;
        }
      }
      ul li a,
      a.contact-email {
        color: #ffffff;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0px;
          width: 100%;
          height: 2px;
          transition: 0.5s;
          background: #ffffff;
        }
        &:hover:before {
          background: #90b13a;
        }
      }
      @media (max-width: 992px) {
        width: 50%;
        &:first-child {
          order: 4;
        }
        &:first-child,
        &:nth-child(4) {
          margin-top: 50px;
        }
      }
      @media (max-width: 576px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:not(:first-child) {
          margin: 0px 0px 50px 0px;
        }
      }
    }
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  background: #6e8e19;
  p {
    font-family: 'BrandonGrotesqueLight';
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
  }
`;
