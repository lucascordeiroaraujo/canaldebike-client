import styled from 'styled-components';

export default styled.div`
  width: 100%;
  .slick-slide img {
    width: 100%;
    height: auto;
  }
  .slick-dots {
    bottom: 28px;
    li {
      width: 20px;
      height: 20px;
      button {
        width: 100%;
        height: 100%;
        border: 2px solid ${props => props.theme.colors.light};
        border-radius: 50%;
        &:before {
          display: none;
        }
      }
      &.slick-active button {
        background: ${props => props.theme.colors.light};
      }
      @media (max-width: 768px) {
        width: 10px;
        height: 10px;
        button {
          border-width: 1px;
        }
      }
    }
  }
`;
