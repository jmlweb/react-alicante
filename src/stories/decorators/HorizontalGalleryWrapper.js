import React from 'react';
import { StyledMainWrapper, StyledHorizontalGallery } from '../components';

const HorizontalGalleryWrapper = story => (
  <StyledMainWrapper>
    <StyledHorizontalGallery>{story()}</StyledHorizontalGallery>
  </StyledMainWrapper>
);

export default HorizontalGalleryWrapper;
