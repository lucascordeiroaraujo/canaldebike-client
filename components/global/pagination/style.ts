import styled from 'styled-components';

export default styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .pagination-item {
    margin: 0px 3px;
    display: flex;
    a,
    span {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      color: ${props => props.theme.colors.text};
    }
    &.current-page a,
    span {
      pointer-events: none;
    }
    &.current-page a {
      color: ${props => props.theme.colors.light};
      background: ${props => props.theme.colors.secondary};
    }
    &:hover:not(.current-page) a {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      color: ${props => props.theme.colors.primary};
    }
  }
`;
