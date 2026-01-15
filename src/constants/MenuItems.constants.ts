import React from 'react';
import { Menu, Home, Package, ShoppingCart, Settings } from "lucide-react";
import { MenuItem } from '../types/MenuItem';

export const MENU_ITEMS: MenuItem[] = [
  { id: "1", label: "Dashboard", icon: React.createElement(Home, { size: 18 }) },
  {
    id: "2",
    label: "Products",
    icon: React.createElement(Package, { size: 18 }),
    children: [
      { id: "2-1", label: "All Products" },
      { id: "2-2", label: "Categories" },
      {
        id: "2-3",
        label: "Inventory",
        children: [
          { id: "2-3-1", label: "Stock Levels" },
          { id: "2-3-2", label: "Reorder Points" },
        ],
      },
    ],
  },
  { id: "3", label: "Orders", icon: React.createElement(ShoppingCart, { size: 18 }) },
  { id: "4", label: "Settings", icon: React.createElement(Settings, { size: 18 }) },
];

export const DEMO_TABS = ["input", "toast", "sidebar"] as const;