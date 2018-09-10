import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../components';

storiesOf('components/Button', module).add('colors', () => (
  <div>
    <Button>Default button</Button>
    {' '}
    <Button primary>Primary button</Button>
    {' '}
    <Button danger>Danger button</Button>
  </div>
));
