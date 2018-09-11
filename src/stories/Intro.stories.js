import React from 'react';
import { storiesOf } from '@storybook/react';

import welcomeText from './markdown/welcome.md';

storiesOf('Intro', module)
  .add('welcome', () => <div dangerouslySetInnerHTML={{ __html: welcomeText }} />);
