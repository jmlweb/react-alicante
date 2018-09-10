import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: ${({ theme }) => `${theme.sizes.contentPadding}`};
`;

export default ContentWrapper;
