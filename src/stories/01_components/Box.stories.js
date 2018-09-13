import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, number, select,
} from '@storybook/addon-knobs';

import { Box } from '../../components';
import theme from '../../theme';
import { MainWrapper } from '../decorators';
import { optionsFromArr } from '../utils';

storiesOf('Components/Box', module)
  .addDecorator(MainWrapper)
  .addDecorator(withKnobs)
  .add('editor', () => {
    const bgOptions = optionsFromArr([
      'black',
      'mediumGray',
      'primary',
      'secondary',
      'danger',
    ]);
    const spaceOptions = {
      range: true,
      min: 0,
      max: theme.space.length - 1,
      step: 1,
    };
    const bg = select('bg', bgOptions, 'black');
    const py = number('py', 2, spaceOptions);
    const px = number('px', 4, spaceOptions);
    const mt = number('mt', 0, spaceOptions);
    const mb = number('mb', 0, spaceOptions);
    const ml = number('ml', 0, spaceOptions);
    const mr = number('mr', 0, spaceOptions);
    const borderRadius = number('borderRadius', 0, spaceOptions);
    return (
      <Box color="white" bg={bg} py={py} px={px} mt={mt} mb={mb} ml={ml} mr={mr} borderRadius={borderRadius}>
        <Box mb={1}>
          <strong>py:</strong>
          {' '}
          {py}
        </Box>
        <Box mb={1}>
          <strong>px:</strong>
          {' '}
          {px}
        </Box>
        <Box mb={1}>
          <strong>mt:</strong>
          {' '}
          {mt}
        </Box>
        <Box mb={1}>
          <strong>mb:</strong>
          {' '}
          {mb}
        </Box>
        <Box mb={1}>
          <strong>ml:</strong>
          {' '}
          {ml}
        </Box>
        <Box>
          <strong>mr:</strong>
          {' '}
          {mr}
        </Box>
      </Box>
    );
  });
