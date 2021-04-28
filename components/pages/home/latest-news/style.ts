import styled, { css } from 'styled-components';

import { shade } from 'polished';

export default styled.section`
  margin: 100px 0px;
  .default-title {
    margin: 0px;
  }
  .latest-news-description {
    width: 100%;
    text-align: center;
    font-family: 'BrandonGrotesqueBlack';
    color: ${props => props.theme.colors.text};
    margin: 25px 0px 0px 0px;
    line-height: 24px;
  }
  @media (max-width: 992px) {
    margin: 50px 0px;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 100px;
  .news-slider-container {
    outline: none;
  }
  @media (max-width: 992px) {
    margin-top: 50px;
  }
`;

export const News = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const NewsImage = styled.div`
  width: 750px;
  position: relative;
  padding-left: 14px;
  img {
    width: 100%;
    height: auto;
  }
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 0px;
    width: calc(100% - 10px);
    height: 100%;
    background: ${props => props.theme.colors.text};
  }
  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SliderControls = styled.div`
  position: absolute;
  top: 50%;
  right: -27px;
  display: flex;
  flex-direction: column;
  transform: translate(0px, -50%);
  button {
    width: 54px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.light};
    border: none;
    font-size: 26px;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
    background: ${props => shade(0.2, props.theme.colors.dark)};
    &:hover {
      background: ${props => props.theme.colors.lightDark};
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    top: auto;
    right: auto;
    bottom: -20px;
    left: 0px;
    transform: translate(0px, 0px);
    justify-content: center;
    flex-direction: row-reverse;
    button {
      width: 40px;
      height: 40px;
    }
  }
`;

export const NewsDescription = styled.div`
  width: 100%;
  flex: 1;
  margin-left: 4%;
  .news-description {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    &-categories {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      a {
        font-family: 'BrandonGrotesqueRegular';
        color: ${props => props.theme.colors.light};
        font-size: 12px;
        text-transform: uppercase;
        margin: 0px 10px 10px 0px;
        border-radius: 10px;
        padding: 2px 8px;
        transition: 0.5s;
        background: ${props => props.theme.colors.secondary};
        &:hover {
          background: ${props => props.theme.colors.primary};
        }
      }
    }
    &-date {
      font-family: 'BrandonGrotesqueRegular';
      font-size: 13px;
      ${props => css`
        color: ${props.theme.name === 'dark'
          ? props.theme.colors.text
          : props.theme.colors.lightDark};
      `};
      margin-bottom: 20px;
    }
    &-title {
      font-size: 30px;
      line-height: 35px;
      font-family: 'BrandonGrotesqueBlack';
      text-transform: uppercase;
      a {
        ${props => css`
          color: ${props.theme.name === 'dark'
            ? props.theme.colors.text
            : props.theme.colors.lightDark};
        `};
      }
      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 28px;
      }
    }
    &-separator {
      width: 90px;
      height: 2px;
      margin: 20px 0px;
      background: ${props => props.theme.colors.primary};
    }
    &-resume {
      font-family: 'BrandonGrotesqueLight';
      margin: 0px;
      line-height: 28px;
      a {
        ${props => css`
          color: ${props.theme.name === 'dark'
            ? props.theme.colors.text
            : props.theme.colors.lightDark};
        `};
      }
    }
    &-call-to-action {
      padding: 10px 30px;
      text-transform: uppercase;
      color: ${props => props.theme.colors.light};
      font-family: 'BrandonGrotesqueBlack';
      transition: 0.5s;
      border-radius: 30px;
      margin-top: 50px;
      ${props => css`
        background: ${props.theme.name === 'dark'
          ? props.theme.colors.primary
          : props.theme.colors.dark};
      `};
      &:hover {
        background: ${props => props.theme.colors.secondary};
      }
    }
    @media (max-width: 768px) {
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 992px) {
    margin: 40px 0px 0px 0px;
  }
`;
