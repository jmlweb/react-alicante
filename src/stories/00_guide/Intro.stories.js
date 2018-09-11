import React from 'react';
import { storiesOf } from '@storybook/react';

import { HTMLRenderer } from '../components';
import { MainWrapper } from '../decorators';
import welcomeText from '../markdown/welcome.md';

storiesOf('00. Guide', module)
  .addDecorator(MainWrapper)
  .add('intro', () => <HTMLRenderer>{welcomeText}</HTMLRenderer>);
