import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  .title {
    font-family: 'BrandonGrotesqueBlack';
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 40px;
  }
`;
