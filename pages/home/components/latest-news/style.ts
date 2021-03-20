import styled from 'styled-components';

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
    color: ${props => props.theme.colors.dark};
    margin: 25px 0px 0px 0px;
    line-height: 24px;
  }
  @media (max-width: 992px) {
    margin: 50px 0px;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 100px;
  @media (max-width: 992px) {
    margin-top: 50px;
  }
`;

export const News = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .news-image {
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
      background: ${props => props.theme.colors.dark};
    }
    @media (max-width: 1200px) {
      width: 600px;
    }
  }
  .news-description {
    width: 100%;
    flex: 1;
    margin-left: 3%;
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
          background: ${props => shade(0.2, props.theme.colors.secondary)};
        }
      }
    }
    &-date {
      font-family: 'BrandonGrotesqueRegular';
      font-size: 13px;
      color: ${props => props.theme.colors.lightDark};
      margin-bottom: 20px;
    }
    &-title {
      font-size: 30px;
      line-height: 35px;
      font-family: 'BrandonGrotesqueBlack';
      color: ${props => props.theme.colors.lightDark};
      text-transform: uppercase;
    }
    &-separator {
      width: 90px;
      height: 2px;
      margin: 20px 0px;
      background: ${props => props.theme.colors.primary};
    }
    &-resume {
      font-family: 'BrandonGrotesqueLight';
      color: ${props => props.theme.colors.lightDark};
      margin: 0px;
      line-height: 28px;
    }
    &-call-to-action {
      padding: 10px 30px;
      text-transform: uppercase;
      color: ${props => props.theme.colors.light};
      font-family: 'BrandonGrotesqueBlack';
      transition: 0.5s;
      border-radius: 30px;
      margin-top: 50px;
      background: ${props => props.theme.colors.dark};
      &:hover {
        background: ${props => props.theme.colors.secondary};
      }
    }
    @media (max-width: 768px) {
      text-align: center;
      justify-content: center;
      align-items: center;
      &-title {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    .news-image {
      width: 100%;
    }
    .news-description {
      margin: 40px 0px 0px 0px;
    }
  }
`;
