import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  .back-to-home-link-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    a {
      display: flex;
      align-items: center;
      font-family: 'BrandonGrotesqueBlack';
      text-transform: uppercase;
      color: ${props => props.theme.colors.dark};
      font-size: 16px;
      transition: 0.5s;
      svg {
        font-size: 22px;
        margin-right: 10px;
      }
      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
    @media (max-width: 992px) {
      padding: 35px 0px;
    }
  }
`;

export const PostContainer = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SidebarContainer = styled.div`
  width: 26%;
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
