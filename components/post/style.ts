import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface IPost {
  hasCategories?: boolean;
}

export default styled.article<IPost>`
  width: 32%;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0px 0px;
  }
  div.category-link {
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
  span,
  h2,
  p {
    width: 100%;
  }
  span {
    font-size: 13px;
    font-family: 'BrandonGrotesqueRegular';
    ${props =>
      typeof props.hasCategories !== undefined &&
      props.hasCategories === false &&
      css`
        margin-top: 15px;
      `}
  }
  h2 {
    font-family: 'BrandonGrotesqueBlack';
    font-size: 24px;
    line-height: 30px;
    font-weight: normal;
    margin: 20px 0px 10px 0px;
    a {
      color: ${props => props.theme.colors.primary};
    }
  }
  p {
    font-family: 'BrandonGrotesqueLight';
    font-size: 16px;
    line-height: 26px;
    margin: 0px;
    a {
      color: ${props => props.theme.colors.text};
    }
  }
  @media (max-width: 992px) {
    width: 48%;
  }
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
    div.category-link {
      justify-content: center;
    }
  }
`;
