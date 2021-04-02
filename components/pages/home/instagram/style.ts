import styled from 'styled-components';

import { shade } from 'polished';

export default styled.section`
  padding-top: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  h1,
  .instagram-link {
    width: 100%;
    color: ${props => props.theme.colors.light};
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    font-family: 'BrandonGrotesqueBlack';
  }
  h1 {
    font-size: calc(2.5rem + ((1vw - 2.5px) * 1.7964));
    line-height: calc(2.5rem + ((1vw - 2.5px) * 1.7964));
    margin: 0px 0px 10px 0px;
    @media (min-width: 1920px) {
      font-size: 70px;
      line-height: 70px;
    }
  }
  .instagram-link {
    font-size: 24px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    color: ${props => props.theme.colors.light};
    svg {
      font-size: 43px;
      margin-right: 10px;
    }
    &:hover {
      color: ${props => shade(0.2, props.theme.colors.light)};
    }
  }
  @media (max-width: 1200px) {
    padding-top: 50px;
  }
`;

export const PhotosContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 95px;
  .media-container {
    width: 16.66%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.dark};
    img,
    video {
      width: 100%;
      height: auto;
      outline: none;
    }
    @media (max-width: 1200px) {
      width: 33.33%;
    }
    @media (max-width: 576px) {
      width: 50%;
    }
  }
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
`;
