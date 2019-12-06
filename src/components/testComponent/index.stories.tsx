import React from 'react';
import TestComponent from './index';

export default {
  component: TestComponent,
  title: 'TestComponent'
};

export const testComponent = () => <TestComponent name="Storybook" />;

testComponent.story = {
  name: 'test Component'
};