import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 100px 0px;
  .default-title {
    margin: 0px;
    @media (min-width: 769px) {
      width: auto;
      text-align: left;
    }
  }
  p {
    margin: 15px 0px 0px 0px;
    color: ${props => props.theme.colors.text};
    strong {
      font-family: 'BrandonGrotesqueBlack';
    }
    @media (max-width: 769px) {
      width: 100%;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px 0px;
  }
`;
