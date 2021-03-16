import styled from 'styled-components';

export default styled.section`
  padding: 100px 0px;
  @media (max-width: 992px) {
    padding: 70px 0px;
  }
`;

export const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
