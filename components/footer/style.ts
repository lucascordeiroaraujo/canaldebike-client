import styled from 'styled-components';

import { shade } from 'polished';

export default styled.footer`
  width: 100%;
  padding-top: 80px;
  margin-top: 100px;
  background: ${props => props.theme.colors.dark};
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    > div {
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
        color: ${props => props.theme.colors.light};
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
        color: ${props => props.theme.colors.light};
        position: relative;
        &:before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0px;
          width: 100%;
          height: 2px;
          transition: 0.5s;
          background: ${props => props.theme.colors.light};
        }
        &:hover:before {
          background: ${props => props.theme.colors.primary};
        }
      }
      form {
        width: 100%;
        max-width: 380px;
        display: flex;
        flex-direction: column;
        margin-top: 45px;
        p {
          color: ${props => props.theme.colors.light};
          margin: 0px 0px 15px 0px;
          font-size: 17px;
        }
        div {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          input {
            height: 45px;
            border-radius: 25px;
            &[type='text'] {
              flex: 1;
              padding-right: 55px;
            }
            &[type='submit'] {
              width: 125px;
              font-family: 'BrandonGrotesqueBlack';
              font-size: 16px;
              text-transform: uppercase;
              color: ${props => props.theme.colors.light};
              margin-left: -40px;
              background: ${props => props.theme.colors.secondary};
              &:hover {
                background: ${props =>
                  shade(0.2, props.theme.colors.secondary)};
              }
            }
          }
        }
        @media (max-width: 576px) {
          max-width: 300px;
        }
      }
      div.social-networking {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        a {
          margin: 0px 15px 15px 0px;
          color: ${props => props.theme.colors.light};
          font-size: 32px;
          line-height: 10px;
          transition: 0.5s;
          &.youtube {
            font-size: 39px;
          }
          &.facebook {
            font-size: 28px;
          }
          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
        @media (max-width: 576px) {
          justify-content: center;
        }
      }
      @media (max-width: 1100px) {
        width: 50%;
        &:first-child {
          order: 4;
        }
      }
      @media (min-width: 576px) and (max-width: 1100px) {
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
  background: ${props => props.theme.colors.secondary};
  p {
    font-family: 'BrandonGrotesqueLight';
    text-transform: uppercase;
    color: ${props => props.theme.colors.light};
    text-align: center;
    @media (max-width: 992px) {
      font-size: 14px;
    }
  }
`;
