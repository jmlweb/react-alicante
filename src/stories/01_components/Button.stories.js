import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import { Button } from '../../components';
import buttonColorsText from '../markdown/buttonColors.md';
import { HorizontalGalleryWrapper } from '../decorators';

storiesOf('Components/Button', module)
  .addDecorator(HorizontalGalleryWrapper)
  .add(
    'colors',
    withNotes(buttonColorsText)(() => (
      <Fragment>
        <Button>Default button</Button>
        {' '}
        <Button primary>Primary button</Button>
        {' '}
        <Button danger>Danger button</Button>
      </Fragment>
    )),
  )
  .add('sizes', () => (
    <Fragment>
      <Button sm>Small button</Button>
      {' '}
      <Button md>Default button</Button>
      {' '}
      <Button lg>Large button</Button>
    </Fragment>
  ));
