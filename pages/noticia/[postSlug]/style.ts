import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
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
