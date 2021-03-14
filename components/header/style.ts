import styled from 'styled-components';

import { shade } from 'polished';

export default styled.header`
  width: 100%;
  height: 120px;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.dark};
  &:before {
    content: '';
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: ${props => props.theme.colors.light};
  }
  div.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background: ${props => props.theme.colors.dark};
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      &:first-child {
        position: relative;
        padding-right: 77px;
        min-width: 270px;
        background: url(${require('~/public/images/header-background.png')})
          right top no-repeat ${props => props.theme.colors.light};
        img {
          width: 100%;
          height: auto;
          max-width: 307px;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 768px) {
          padding-right: 26px;
          min-width: 200px;
          max-width: 150px;
        }
        @media (max-width: 520px) {
          &.search-form-opened img {
            opacity: 0.2;
          }
        }
      }
      &:last-child {
        z-index: 2;
        justify-content: flex-end;
        ul {
          list-style: none;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-right: 150px;
          transition: 0.5s;
          li {
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: 35px;
            position: relative;
            &:before {
              content: '';
              position: absolute;
              bottom: 0px;
              left: 0px;
              width: 100%;
              height: 5px;
              background: ${props => props.theme.colors.dark};
            }
            a {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              span {
                width: 100%;
                text-transform: uppercase;
                color: ${props => props.theme.colors.light};
                text-align: center;
                white-space: nowrap;
                transition: 0.5s;
              }
            }
            &.active:before {
              background: ${props => props.theme.colors.primary};
            }
            &.store {
              a {
                height: 45px;
                span {
                  height: 45px;
                  padding: 0px 20px;
                  border-radius: 30px;
                  display: flex;
                  align-items: center;
                  transition: 0.5s;
                  background: ${props => props.theme.colors.primary};
                  @media (max-width: 1500px) {
                    height: 35px;
                    padding: 0px 10px;
                  }
                }
                &:hover span {
                  background: ${props =>
                    shade(0.2, props.theme.colors.primary)};
                }
              }
              @media (max-width: 992px) and (min-width: 768px) {
                display: none;
              }
            }
            &:hover:not(.active) a span {
              color: ${props => shade(0.2, props.theme.colors.light)};
            }
            @media (max-width: 1500px) {
              margin-left: 21px;
              a span {
                font-size: 16px;
              }
            }
            @media (max-width: 992px) and (min-width: 768px) {
              margin-left: 18px;
              a span {
                font-size: 14px;
              }
            }
            @media (max-width: 768px) {
              height: auto;
              margin: 20px 0px;
              &:before {
                display: none;
              }
            }
          }
          @media (min-width: 576px) and (max-width: 1500px) {
            margin-right: 50px;
            &.search-form-opened {
              opacity: 0.2;
            }
          }
          @media (max-width: 768px) {
            position: fixed;
            width: 100%;
            height: calc(100vh - 70px);
            top: 70px;
            left: 0px;
            margin: 0px;
            background: ${props => props.theme.colors.dark};
            z-index: 20;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            opacity: 0;
            pointer-events: none;
            &.menu-opened {
              opacity: 1;
              pointer-events: all;
            }
          }
        }
        form {
          position: relative;
          display: flex;
          input {
            width: 255px;
            height: 45px;
            padding-right: 43px;
            @media (max-width: 1500px) {
              width: 200px;
            }
          }
          button {
            width: 28px;
            height: 28px;
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
            border-radius: 50%;
            transition: 0.5s;
            color: ${props => props.theme.colors.primary};
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            background: ${props => props.theme.colors.light};
            &:hover {
              color: ${props => shade(0.2, props.theme.colors.primary)};
            }
          }
          @media (max-width: 1500px) {
            input {
              width: 0px;
              height: 35px;
              opacity: 0;
              pointer-events: none;
              position: absolute;
              right: 0px;
              padding-right: 55px;
              box-shadow: 0px 0px 10px rgb(0 0 0 / 50%);
              &.search-form-opened {
                width: 255px;
                opacity: 1;
                pointer-events: all;
              }
            }
            button {
              width: 35px;
              height: 35px;
              right: 0px;
              top: 0px;
              font-size: 20px;
              transform: translate(0px, 0px);
              position: relative;
            }
          }
        }
        button.menu-mobile {
          width: 33px;
          height: 28px;
          position: relative;
          margin-left: 20px;
          border: none;
          cursor: pointer;
          display: none;
          background-color: transparent;
          &:before,
          &:after,
          span {
            content: '';
            position: absolute;
            left: 0px;
            width: 100%;
            height: 4px;
            transition: 0.5s;
            border-radius: 5px;
            background-color: ${props => props.theme.colors.light};
          }
          &:before {
            top: 0px;
          }
          &:after {
            bottom: 0px;
          }
          span {
            top: 50%;
            transform: translate(0px, -50%);
          }
          &.menu-opened {
            &:before,
            &:after {
              top: 12px;
            }
            &:before {
              transform: rotate(45deg);
            }
            &:after {
              transform: rotate(-45deg);
            }
            span {
              opacity: 0;
            }
          }
          @media (max-width: 768px) {
            display: flex;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 70px;
  }
`;
