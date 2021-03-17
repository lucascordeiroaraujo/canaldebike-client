import styled from 'styled-components';

export default styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  .store {
    display: none;
    @media (min-width: 992px) {
      display: block;
      width: 100%;
      margin-bottom: 35px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .social-networking {
    display: none;
    @media (min-width: 992px) {
      display: flex;
      flex-direction: column;
      .title {
        font-family: 'BrandonGrotesqueBlack';
        font-size: 24px;
        line-height: 24px;
        color: ${props => props.theme.colors.dark};
        text-transform: uppercase;
        margin-bottom: 15px;
      }
      .social-networking-icons {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        a {
          margin: 0px 15px 15px 0px;
          color: ${props => props.theme.colors.dark};
          font-size: 30px;
          line-height: 10px;
          transition: 0.5s;
          &.youtube {
            font-size: 39px;
          }
          &.facebook {
            font-size: 28px;
          }
          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }
`;
