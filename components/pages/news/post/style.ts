import styled from 'styled-components';

export default styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
`;

export const FeaturedImage = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const CategoriesAndShared = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  > div {
    width: 48%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &.categories-container {
      justify-content: flex-start;
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
    &.share-container {
      &:not(.empty-categories) {
        justify-content: flex-end;
      }
      strong {
        font-family: 'BrandonGrotesqueBlack';
        font-size: 16px;
        line-height: 11px;
        color: ${props => props.theme.colors.text};
        text-transform: uppercase;
      }
      a {
        margin-left: 10px;
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        line-height: 10px;
        transition: 0.5s;
        &:hover {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    > div {
      width: 100%;
      justify-content: flex-start !important;
      &.categories-container {
        margin-bottom: 10px;
      }
    }
  }
`;

export const PostDateAuthor = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  font-family: 'BrandonGrotesqueRegular';
  margin-bottom: 20px;
  a {
    font-family: 'BrandonGrotesqueBlack';
    font-size: 17px;
    color: ${props => props.theme.colors.secondary};
    margin-left: 3px;
    transition: 0.5s;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .title-separator {
    width: 150px;
    height: 3px;
    margin-bottom: 30px;
    background: ${props => props.theme.colors.secondary};
  }
  h1,
  h2,
  h3,
  h4 {
    width: 100%;
    font-family: 'BrandonGrotesqueBlack';
    margin: 0px 0px 30px 0px;
    color: ${props => props.theme.colors.text};
  }
  h1 {
    font-size: 35px;
    line-height: 40px;
    text-transform: uppercase;
    @media (max-width: 992px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
  h2,
  h4 {
    font-size: 24px;
    color: ${props => props.theme.colors.secondary};
  }
  .sub-title {
    margin-top: -10px;
  }
  p {
    width: 100%;
    color: ${props => props.theme.colors.text};
    font-family: 'BrandonGrotesqueRegular';
    font-size: 22px;
    line-height: 40px;
    margin: 0px 0px 40px 0px;
    @media (max-width: 992px) {
      font-size: 18px;
      line-height: 26px;
      margin: 0px 0px 30px 0px;
    }
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    margin: 0px 0px 20px 0px;
  }
  img {
    width: 80%;
    height: auto;
    margin: 0px auto;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;
