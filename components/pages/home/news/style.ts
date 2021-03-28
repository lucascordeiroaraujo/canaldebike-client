import styled from 'styled-components';

export default styled.section`
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .button-all-news {
    padding: 10px 30px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.light};
    font-family: 'BrandonGrotesqueBlack';
    transition: 0.5s;
    border-radius: 30px;
    background: ${props => props.theme.colors.dark};
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
  @media (max-width: 992px) {
    padding: 70px 0px;
  }
`;

export const PostsContainer = styled.div`
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
