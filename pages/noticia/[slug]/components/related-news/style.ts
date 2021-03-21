import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    div.post-container {
      width: 32%;
      @media (max-width: 992px) {
        width: 100%;
        text-align: center;
        .category-link {
          justify-content: center;
        }
      }
    }
  }
`;
