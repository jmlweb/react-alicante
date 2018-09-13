import styled from 'styled-components';

const StyledHorizontalGallery = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;

  & > * {
    margin-bottom: 10px;
  }

  @media(min-width: 1024px) {
    flex-direction: row;
    margin-left: -10px;
    margin-right: -10px;
    & > * {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export default StyledHorizontalGallery;
