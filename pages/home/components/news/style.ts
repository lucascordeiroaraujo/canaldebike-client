import styled, { css } from 'styled-components';

import { shade } from 'polished';

export default styled.section`
  padding: 100px 0px;
  h1 {
    width: 100%;
    font-family: 'BrandonGrotesqueBlack';
    color: ${props => props.theme.colors.primary};
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    font-size: calc(2.5rem + ((1vw - 2.5px) * 1.7964));
    line-height: calc(2.5rem + ((1vw - 2.5px) * 1.7964));
    margin: 0px 0px 100px 0px;
    @media (min-width: 1920px) {
      font-size: 70px;
      line-height: 70px;
    }
    @media (max-width: 992px) {
      margin: 0px 0px 50px 0px;
    }
  }
  @media (max-width: 992px) {
    padding: 70px 0px;
  }
`;

export const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

interface IArticle {
  hasCategories?: boolean;
}

export const Article = styled.article<IArticle>`
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
