import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Button } from '../../components';
import buttonColorsText from '../markdown/buttonColors.md';
import { HorizontalGalleryWrapper } from '../decorators';
import { StoryLinker } from '../components';

storiesOf('Components/Button', module)
  .addDecorator(HorizontalGalleryWrapper)
  .addDecorator(withKnobs)
  .add(
    'colors',
    withNotes(buttonColorsText)(() => (
      <Fragment>
        <Button onClick={action('buttonClick')}>Default button</Button>
        {' '}
        <Button primary onClick={action('buttonClick')}>Primary button</Button>
        {' '}
        <Button onClick={action('buttonClick')} danger>Danger button</Button>
        {' '}
        <StoryLinker story="sizes">Check sizes</StoryLinker>
      </Fragment>
    )),
  )
  .add('sizes', () => (
    <Fragment>
      <Button onClick={action('buttonClick')} sm>Small button</Button>
      {' '}
      <Button onClick={action('buttonClick')} md>Default button</Button>
      {' '}
      <Button onClick={action('buttonClick')} lg>Large button</Button>
      {' '}
      <StoryLinker story="colors">Check colors</StoryLinker>
    </Fragment>
  ))
  .add('editor', () => {
    const children = text('Children', 'Click me!');
    const colorOptions = {
      primary: 'primary',
      danger: 'danger',
      default: 'gray',
    };
    const sizeOptions = {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    };
    const color = select('color', colorOptions, 'default');
    const size = select('size', sizeOptions, 'md');
    // we build props instead of props values
    const props = {
      [color]: true,
      [size]: true,
    };
    return (
      <Button {...props}>{children}</Button>
    );
  });
