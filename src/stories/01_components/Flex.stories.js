import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import { Box, Flex } from '../../components';
import { MainWrapper } from '../decorators';
import { optionsFromArr } from '../utils';

storiesOf('Components/Flex', module)
  .addDecorator(MainWrapper)
  .addDecorator(withKnobs)
  .add('editor', () => {
    const alignItemsOptions = optionsFromArr([
      'flex-start',
      'flex-end',
      'center',
      'stretch',
      'inherit',
    ]);
    const justifyContentOptions = optionsFromArr([
      'flex-start',
      'flex-end',
      'center',
      'space-around',
      'space-between',
      'inherit',
    ]);
    const flexWrapOptions = optionsFromArr(['wrap', 'nowrap']);
    const flexDirectionOptions = optionsFromArr(['row', 'row-reverse', 'column', 'column-reverse']);
    const itemsOptions = {
      range: true,
      min: 1,
      max: 25,
      step: 1,
    };
    const alignItems = select('alignItems', alignItemsOptions, 'flex-start');
    const justifyContent = select('justifyContent', justifyContentOptions, 'flex-start');
    const flexWrap = select('flexWrap', flexWrapOptions, 'wrap');
    const flexDirection = select('flexDirection', flexDirectionOptions, 'row');
    const items = number('items', 7, itemsOptions);
    let i = 0;
    const children = Array.from({ length: items - 1 }).map(() => {
      i += 1;
      return (
        <Box
          border="2px solid"
          px={(i % 7) * (i * 3)}
          py={(i % 4) * 2}
          borderColor="secondaryDark"
          bg="secondaryLight"
          color="white"
          p={5}
          key={i}
        >
          {i}
        </Box>
      );
    });
    return (
      <Flex
        alignItems={alignItems}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
        flexDirection={flexDirection}
      >
        {children}
      </Flex>
    );
  });
