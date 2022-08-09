import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import {
  Sidebar,
} from './Sidebar';
import {
  SidebarContent,
} from './Sidebar.dev';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // @see https://github.com/storybookjs/storybook/issues/18612
    onOpen: { action: 'onOpen' },
    onClose: { action: 'onClose' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = ({
  children,
  ...args
}) => (
  <Sidebar {...args}>
    {children}
  </Sidebar>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  children: <SidebarContent />,
};
