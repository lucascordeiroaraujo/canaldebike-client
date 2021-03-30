import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  strong {
    font-family: 'BrandonGrotesqueBlack';
    color: ${props => props.theme.colors.text};
    font-size: 30px;
    line-height: 34px;
    text-align: center;
    @media (max-width: 769px) {
      font-size: 25px;
      line-height: 28px;
    }
  }
`;
