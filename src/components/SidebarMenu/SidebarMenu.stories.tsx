import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarMenu } from './SidebarMenu';
import { Home, ShoppingCart, Package, Settings, Users, BarChart } from 'lucide-react';

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
    <div className="relative h-screen">
      <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
    items: [
      {
        id: '1',
        label: 'Dashboard',
        icon: <Home size={18} />,
      },
      {
        id: '2',
        label: 'Products',
        icon: <Package size={18} />,
      },
      {
        id: '3',
        label: 'Orders',
        icon: <ShoppingCart size={18} />,
      },
      {
        id: '4',
        label: 'Settings',
        icon: <Settings size={18} />,
      },
    ],
  },
};

export const WithOneLevel: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    items: [
      {
        id: '1',
        label: 'Dashboard',
        icon: <Home size={18} />,
      },
      {
        id: '2',
        label: 'Products',
        icon: <Package size={18} />,
        children: [
          { id: '2-1', label: 'All Products' },
          { id: '2-2', label: 'Categories' },
          { id: '2-3', label: 'Inventory' },
        ],
      },
      {
        id: '3',
        label: 'Orders',
        icon: <ShoppingCart size={18} />,
        children: [
          { id: '3-1', label: 'All Orders' },
          { id: '3-2', label: 'Pending' },
          { id: '3-3', label: 'Completed' },
        ],
      },
    ],
  },
};

export const WithTwoLevels: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    items: [
      {
        id: '1',
        label: 'Dashboard',
        icon: <Home size={18} />,
      },
      {
        id: '2',
        label: 'Products',
        icon: <Package size={18} />,
        children: [
          { id: '2-1', label: 'All Products' },
          { id: '2-2', label: 'Categories' },
          {
            id: '2-3',
            label: 'Inventory',
            children: [
              { id: '2-3-1', label: 'Stock Levels' },
              { id: '2-3-2', label: 'Reorder Points' },
              { id: '2-3-3', label: 'Suppliers' },
            ],
          },
        ],
      },
      {
        id: '3',
        label: 'Analytics',
        icon: <BarChart size={18} />,
        children: [
          {
            id: '3-1',
            label: 'Sales Reports',
            children: [
              { id: '3-1-1', label: 'Daily' },
              { id: '3-1-2', label: 'Monthly' },
              { id: '3-1-3', label: 'Yearly' },
            ],
          },
          { id: '3-2', label: 'Customer Insights' },
        ],
      },
      {
        id: '4',
        label: 'Settings',
        icon: <Settings size={18} />,
      },
    ],
  },
};

export const Minimal: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    items: [
      { id: '1', label: 'Home' },
      { id: '2', label: 'Profile' },
      { id: '3', label: 'Settings' },
    ],
  },
};

export const WithIcons: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    items: [
      {
        id: '1',
        label: 'Dashboard',
        icon: <Home size={18} />,
      },
      {
        id: '2',
        label: 'Users',
        icon: <Users size={18} />,
      },
      {
        id: '3',
        label: 'Analytics',
        icon: <BarChart size={18} />,
      },
      {
        id: '4',
        label: 'Settings',
        icon: <Settings size={18} />,
      },
    ],
  },
};