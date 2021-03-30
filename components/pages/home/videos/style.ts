import styled, { css } from 'styled-components';

import { shade } from 'polished';

export default styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${props =>
    props.theme.name === 'light' &&
    css`
      background: url(${require('~/public/images/background-videos.jpg')})
        center top repeat;
    `}
  .container {
    max-width: 947px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .youtube-link {
    font-family: 'BrandonGrotesqueBlack';
    text-transform: uppercase;
    color: ${props => props.theme.colors.light};
    padding: 15px 30px;
    margin: 80px 0px;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.error};
    svg {
      font-size: 30px;
      margin-right: 10px;
    }
    &:hover {
      background: ${props => shade(0.2, props.theme.colors.error)};
    }
    @media (max-width: 576px) {
      width: 96%;
      font-size: 14px;
      margin: 40px 0px;
    }
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(${require('~/public/images/background-videos-cover.png')});
  background-attachment: fixed;
  h1 {
    width: 100%;
    font-family: 'BrandonGrotesqueBlack';
    color: ${props => props.theme.colors.light};
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    font-size: 70px;
    line-height: 70px;
    position: absolute;
    z-index: 2;
    top: 120px;
    @media (max-width: 992px) {
      font-size: 50px;
      line-height: 50px;
      top: 80px;
    }
    @media (max-width: 576px) {
      font-size: 32px;
      line-height: 32px;
    }
  }
  @media (max-width: 992px) {
    height: 450px;
    background-position: left top;
  }
  @media (max-width: 576px) {
    height: 400px;
  }
`;

export const FullVideo = styled.article`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  margin-top: -200px;
  iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

export const VideosThumbs = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 40px;
  .video-thumb {
    width: 24%;
    position: relative;
    background: ${props => props.theme.colors.primary};
    img {
      transition: 0.5s;
    }
    .icon-container,
    .icon-container:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .icon-container {
      &:before {
        content: '';
        z-index: -1;
        width: 35%;
        height: 35%;
        margin-top: -5px;
        background: ${props => props.theme.colors.light};
      }
      svg {
        font-size: 70px;
        color: #ff0000;
      }
    }
    &:hover img {
      opacity: 0.5;
    }
    @media (max-width: 992px) {
      width: 48%;
      &:nth-child(1),
      &:nth-child(2) {
        margin-bottom: 35px;
      }
    }
    @media (max-width: 576px) {
      &:nth-child(1),
      &:nth-child(2) {
        margin-bottom: 15px;
      }
      .icon-container svg {
        font-size: 30px;
      }
    }
  }
  @media (max-width: 992px) {
    width: 96%;
  }
`;
