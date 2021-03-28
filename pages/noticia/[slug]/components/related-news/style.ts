import styled, { css } from 'styled-components';

interface IRelatedNewsProps {
  lessThan3Posts: boolean;
}

export default styled.section<IRelatedNewsProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 150px;
  div.post-container {
    width: 32%;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
    @media (max-width: 992px) {
      width: 100%;
      text-align: center;
      .category-link {
        justify-content: center;
      }
    }
  }
  ${props =>
    typeof props.lessThan3Posts &&
    css`
      @media (min-width: 992px) {
        justify-content: center;
        div.post-container {
          width: 40%;
          margin: 20px;
        }
      }
    `}
`;
