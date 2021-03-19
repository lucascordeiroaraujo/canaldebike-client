import styled, { css } from 'styled-components';

import { shade } from 'polished';

export default styled.section`
  width: 100%;
  min-height: 500px;
  position: relative;
  margin: 100px 0px;
  ${props =>
    props.theme.name === 'light' &&
    css`
      background: url(${require('~/public/images/background-popular-posts.png')})
        center top repeat;
    `}
  .popular-posts {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    &-title {
      margin: 100px 0px;
      color: ${props => props.theme.colors.light};
    }
    &-container {
      .slick-list .slick-slide > div {
        padding: 0 30px;
      }
    }
    &-slider-controls {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 50px 0px -27px 0px;
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
          background: #444444;
        }
      }
    }
  }
  @media (max-width: 768px) {
    margin: 50px 0px;
    .popular-posts-title {
      margin: 50px 0px;
    }
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(${require('~/public/images/background-popular-posts-cover.png')});
  background-attachment: fixed;
  @media (max-width: 768px) {
    height: 250px;
  }
`;
