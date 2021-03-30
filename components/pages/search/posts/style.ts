import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  div.post-container {
    width: 32%;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
    @media (min-width: 993px) {
      &:not(:nth-child(3n)) {
        margin-right: 2%;
      }
    }
    @media (max-width: 992px) {
      width: 49%;
      &:not(:nth-child(2n)) {
        margin-right: 2%;
      }
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`;
