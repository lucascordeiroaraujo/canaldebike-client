import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0px;
  a {
    display: flex;
    align-items: center;
    font-family: 'BrandonGrotesqueBlack';
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    transition: 0.5s;
    svg {
      font-size: 22px;
      margin-right: 10px;
    }
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
  @media (max-width: 992px) {
    padding: 35px 0px;
  }
`;
