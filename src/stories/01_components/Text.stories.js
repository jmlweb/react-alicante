import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Text } from '../../components';
import { MainWrapper } from '../decorators';
import { optionsFromArr } from '../utils';

storiesOf('Components/Text', module)
  .addDecorator(MainWrapper)
  .addDecorator(withKnobs)
  .add('editor', () => {
    const children = text('Children', 'Welcome to React Alicante!');
    const isOptions = optionsFromArr([
      'span',
      'p',
      'h2',
    ]);
    const colorOptions = optionsFromArr([
      'black',
      'mediumGray',
      'primary',
      'secondary',
      'danger',
    ]);
    const fontSizeOptions = optionsFromArr([
      'undefined',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);
    const fontWeightOptions = optionsFromArr([
      'light',
      'normal',
      'bold',
    ]);
    const is = select('is', isOptions, 'span');
    const color = select('color', colorOptions, 'black');
    const fontSize = select('fontSize', fontSizeOptions, 'undefined');
    const fontWeight = select('fontWeight', fontWeightOptions, 'normal');
    return (
      <Text is={is} color={color} fontSize={fontSize} fontWeight={fontWeight}>{children}</Text>
    );
  });
