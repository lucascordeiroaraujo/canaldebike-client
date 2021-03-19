import styled from 'styled-components';

export default styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  .featured-image-container {
    width: 100%;
    margin-bottom: 30px;
  }
  .post-date-and-author {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${props => props.theme.colors.dark};
    font-family: 'BrandonGrotesqueRegular';
    margin-bottom: 20px;
    a {
      font-family: 'BrandonGrotesqueBlack';
      font-size: 17px;
      color: ${props => props.theme.colors.secondary};
      margin-left: 3px;
      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  h1,
  h2,
  h3,
  h4 {
    width: 100%;
    font-family: 'BrandonGrotesqueBlack';
    margin: 0px 0px 30px 0px;
    color: ${props => props.theme.colors.dark};
  }
  h1 {
    font-size: 35px;
    line-height: 40px;
    text-transform: uppercase;
    @media (max-width: 992px) {
      font-size: 28px;
      line-height: 35px;
    }
  }
  h2,
  h4 {
    font-size: 24px;
    color: ${props => props.theme.colors.secondary};
  }
  p {
    width: 100%;
    color: ${props => props.theme.colors.dark};
    font-family: 'BrandonGrotesqueRegular';
    font-size: 24px;
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
