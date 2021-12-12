import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './component';

const stories = storiesOf('TextInput', module);

stories.add('Default', () => <TextInput />);
