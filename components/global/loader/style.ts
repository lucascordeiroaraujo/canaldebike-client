import styled from 'styled-components';

export default styled.div`
  position: fixed;
  z-index: 50;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  background: ${props => props.theme.colors.dark};
  img {
    margin-bottom: 20px;
  }
  p {
    font-family: 'GothamBold';
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }
`;
