import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { MenuItem } from "@/src/types/MenuItem";

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  width?: string;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  width = "w-80",
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div key={item.id} className="w-full">
        <button
          onClick={() => hasChildren && toggleItem(item.id)}
          className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors text-left ${
            !hasChildren ? "cursor-default" : ""
          }`}
          style={{ paddingLeft: `${16 + level * 16}px` }}
        >
          <div className="flex items-center gap-3">
            {item.icon && <span aria-hidden="true">{item.icon}</span>}
            <span className="text-gray-800 font-medium">{item.label}</span>
          </div>
          {hasChildren && (
            <ChevronRight
              size={18}
              className={`text-gray-500 transition-transform duration-200 ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          )}
        </button>
        {hasChildren && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full ${width} bg-white shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Sidebar navigation"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="overflow-y-auto h-[calc(100%-73px)]">
          {items.map((item) => renderMenuItem(item))}
        </nav>
      </aside>
    </>
  );
};
