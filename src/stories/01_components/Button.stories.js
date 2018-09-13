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
        <Button variant="primary" onClick={action('buttonClick')}>Primary button</Button>
        {' '}
        <Button variant="danger" onClick={action('buttonClick')}>Danger button</Button>
        {' '}
        <StoryLinker story="sizes">Check sizes</StoryLinker>
      </Fragment>
    )),
  )
  .add('sizes', () => (
    <Fragment>
      <Button size="sm" onClick={action('buttonClick')}>Small button</Button>
      {' '}
      <Button size="md" onClick={action('buttonClick')}>Default button</Button>
      {' '}
      <Button size="lg" onClick={action('buttonClick')}>Large button</Button>
      {' '}
      <StoryLinker story="colors">Check colors</StoryLinker>
    </Fragment>
  ))
  .add('editor', () => {
    const children = text('Children', 'Click me!');
    const colorOptions = {
      primary: 'primary',
      danger: 'danger',
      mediumGray: 'mediumGray',
    };
    const sizeOptions = {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    };
    const color = select('color', colorOptions, 'primary');
    const size = select('size', sizeOptions, 'md');
    // we build props instead of props values
    return (
      <Button variant={color} size={size}>{children}</Button>
    );
  });
