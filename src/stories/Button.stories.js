import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import { Button } from '../components';
import buttonColorsText from './markdown/buttonColors.md';

storiesOf('components/Button', module).add('colors', withNotes(buttonColorsText)(() => (
  <div>
    <Button>Default button</Button>
    {' '}
    <Button primary>Primary button</Button>
    {' '}
    <Button danger>Danger button</Button>
  </div>
))).add('sizes', () => (
  <div>
    <Button sm>Small button</Button>
    {' '}
    <Button md>Default button</Button>
    {' '}
    <Button lg>Large button</Button>
  </div>
));
