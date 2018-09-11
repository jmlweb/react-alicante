import styled from 'styled-components';

const StyledHorizontalGallery = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: -10px;
  margin-right: -10px;

  & > * {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default StyledHorizontalGallery;
