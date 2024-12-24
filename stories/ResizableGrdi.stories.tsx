import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ResizableGrid from '../src/ResizableGrid';
import { Layout } from 'react-grid-layout';

export default {
  title: 'ResizableGrid',
  component: ResizableGrid,
} as Meta<typeof ResizableGrid>;

const initialLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
    { i: 'b', x: 2, y: 0, w: 1, h: 1 },
    { i: 'c', x: 3, y: 0, w: 1, h: 1 },
  ],
  md: [
    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
    { i: 'b', x: 2, y: 0, w: 1, h: 1 },
    { i: 'c', x: 3, y: 0, w: 1, h: 1 },
  ],
  sm: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 1, h: 1 },
    { i: 'c', x: 2, y: 0, w: 1, h: 1 },
  ],
  xs: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 1, h: 1 },
    { i: 'c', x: 0, y: 2, w: 2, h: 1 },
  ],
  xxs: [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 1, h: 1 },
    { i: 'c', x: 0, y: 2, w: 2, h: 1 },
  ],
};

const Template: StoryFn<typeof ResizableGrid> = args => (
  <ResizableGrid {...args}>
    <div>Card A</div>
    <div>Card B</div>
    <div>Card C</div>
  </ResizableGrid>
);

export const Default = Template.bind({});
Default.args = {
  initialLayouts: initialLayouts,
};
