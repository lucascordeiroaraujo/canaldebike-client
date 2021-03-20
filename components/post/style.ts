import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface IPost {
  hasCategories?: boolean;
  isSlider: boolean;
}

export default styled.article<IPost>`
  width: 100%;
  display: flex;
  flex-direction: column;
  .post-image-container {
    width: 100%;
    position: relative;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
    background: ${props => props.theme.colors.primary};
    .call-to-action,
    img {
      transition: 0.5s;
    }
    .call-to-action {
      position: absolute;
      z-index: 3;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'BrandonGrotesqueBlack';
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${props => props.theme.colors.light};
      opacity: 0;
      pointer-events: none;
    }
    img {
      width: 100%;
      height: auto;
    }
    &:hover {
      .call-to-action {
        opacity: 1;
      }
      img {
        filter: blur(5px);
        opacity: 0.5;
      }
    }
  }
  .category-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15px;
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
  .post-date,
  .post-title,
  .post-description {
    width: 100%;
  }
  .post-date {
    font-size: 13px;
    font-family: 'BrandonGrotesqueRegular';
    color: ${props =>
      props.isSlider ? props.theme.colors.light : props.theme.colors.dark};
    ${props =>
      typeof props.hasCategories !== undefined &&
      props.hasCategories === false &&
      css`
        margin-top: 15px;
      `}
  }
  .post-title {
    font-family: 'BrandonGrotesqueBlack';
    font-size: 24px;
    line-height: 30px;
    font-weight: normal;
    margin: 20px 0px 10px 0px;
    a {
      color: ${props =>
        props.isSlider ? props.theme.colors.light : props.theme.colors.primary};
    }
  }
  .post-description {
    font-family: 'BrandonGrotesqueLight';
    font-size: 16px;
    line-height: 26px;
    margin: 0px;
    a {
      color: ${props =>
        props.isSlider ? props.theme.colors.light : props.theme.colors.dark};
    }
  }
  @media (max-width: ${props => (props.isSlider ? 768 : 576)}px) {
    text-align: center;
    .category-link {
      justify-content: center;
    }
  }
`;
