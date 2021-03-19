import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  div.post-container {
    width: 32%;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
    @media (max-width: 992px) {
      width: 48%;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`;
