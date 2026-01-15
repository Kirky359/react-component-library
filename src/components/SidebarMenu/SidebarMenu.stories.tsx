import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarMenu } from './SidebarMenu';
import { MENU_ITEMS } from "../../constants/MenuItems.constants";

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const SidebarWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="relative h-screen bg-gray-100">
      <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Open Sidebar
        </button>
      </div>
      <SidebarMenu {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    items: MENU_ITEMS,
    width: "w-80",
  },
};

export const CustomWidth: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    items: MENU_ITEMS,
    width: "w-64",
  },
};