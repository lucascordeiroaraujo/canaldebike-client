import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0px;
  h1.default-title {
    margin: 0px;
    @media (min-width: 769px) {
      width: auto;
      text-align: left;
    }
    /* @media (max-width: 768px) {
      br {
        display: none;
      }
    } */
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px 0px;
  }
`;

export const CategoryFilter = styled.div`
  width: 100%;
  max-width: 375px;
  position: relative;
  button,
  ul {
    display: flex;
    border: 1px solid ${props => props.theme.colors.dark};
  }
  button,
  ul li a {
    width: 100%;
    height: 60px;
    padding: 0px 17px;
    text-transform: uppercase;
    font-family: 'BrandonGrotesqueBlack';
    font-size: 16px;
    color: ${props => props.theme.colors.dark};
    transition: 0.5s;
    align-items: center;
  }
  button {
    justify-content: space-between;
    cursor: pointer;
    background: transparent;
    &:hover {
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    }
    svg {
      font-size: 25px;
    }
  }
  ul {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    z-index: 30;
    top: 59px;
    left: 0px;
    width: 100%;
    max-height: 250px;
    flex-direction: column;
    overflow: auto;
    transition: 0.5s;
    li {
      display: flex;
      width: 100%;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.colors.dark};
      }
      background: #e8e8e8;
      a {
        display: flex;
        &:hover {
          color: ${props => props.theme.colors.light};
          background: ${props => props.theme.colors.primary};
        }
      }
    }
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #ccc;
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.dark};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.colors.secondary};
    }
    &.opened-subcategories {
      opacity: 1;
      pointer-events: all;
    }
  }
  @media (max-width: 992px) {
    max-width: 250px;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
    max-width: 80%;
  }
`;
