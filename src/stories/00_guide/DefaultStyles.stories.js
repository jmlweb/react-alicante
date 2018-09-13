import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import { MainWrapper } from '../decorators';

storiesOf('Guide', module)
  .addDecorator(MainWrapper)
  .add('default styles', () => (
    <div>
      <h1>{faker.lorem.sentence()}</h1>
      <p>
        {faker.lorem.sentences()}
        {' '}
        {faker.lorem.sentences()}
      </p>
      <p>
        {faker.lorem.sentences()}
        {' '}
        {faker.lorem.sentences()}
      </p>
      <h2>{faker.lorem.sentence()}</h2>
      <p>
        {faker.lorem.sentences()}
        {' '}
        {faker.lorem.sentences()}
        {' '}
        {faker.lorem.sentences()}
      </p>
      <h3>{faker.lorem.sentence()}</h3>
      <ul>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <ul>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
        </ul>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
      </ul>
      <h4>{faker.lorem.sentence()}</h4>
      <ol>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <ol>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
          <li>{faker.lorem.sentence()}</li>
        </ol>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
      </ol>
      <h5>{faker.lorem.sentence()}</h5>
      <dl>
        <dt>{faker.lorem.sentence()}</dt>
        <dd>{faker.lorem.sentence()}</dd>
        <dt>{faker.lorem.sentence()}</dt>
        <dd>{faker.lorem.sentence()}</dd>
        <dt>{faker.lorem.sentence()}</dt>
        <dd>{faker.lorem.sentence()}</dd>
      </dl>
    </div>
  ));
