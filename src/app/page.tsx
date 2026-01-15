"use client";

import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { Toast, type ToastProps } from "../components/Toast/Toast";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import { Input } from "../components/Input/Input";
import { MENU_ITEMS } from "../constants/MenuItems.constants";


const ComponentLibraryDemo = () => {
  const [activeTab, setActiveTab] = useState<"input" | "toast" | "sidebar">(
    "input"
  );
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [toasts, setToasts] = useState<
    Array<{ id: number; message: string; type: ToastProps["type"] }>
  >([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toastIdRef = useRef(0);

  const showToast = (message: string, type: ToastProps["type"] = "info") => {
    const id = toastIdRef.current++;
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div
      className={`
        min-h-screen w-full overflow-x-hidden bg-linear-to-br from-blue-50 to-indigo-100
        p-4 md:p-8
        transition-all duration-300 ease-in-out
    ${
      isSidebarOpen
        ? "pr-3 sm:pr-4 md:pr-76 lg:pr-84 xl:pr-100"
        : "pr-4 md:pr-8 xl:pr-12"
    }
  `}
    >
      <div className="w-full max-w-6xl xl:max-w-7xl md:max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
            React Component Library
          </h1>
          <p className="text-gray-600 xl:text-lg">
            Professional UI components with TypeScript & Storybook-ready
          </p>
        </div>

        <div className="flex overflow-x-auto md:overflow-visible gap-2 mb-6 bg-white p-2 rounded-lg shadow no-scrollbar">
          {(["input", "toast", "sidebar"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-25 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 xl:p-12">
          {activeTab === "input" && (
            <div className="space-y-8 flex flex-col items-center">
              <Input
                label="Username"
                placeholder="Enter your username"
                value={inputValue}
                onChange={setInputValue}
                clearable
              />
              <Input
                type="password"
                label="Password"
                value={passwordValue}
                onChange={setPasswordValue}
                clearable
              />
              <Input
                type="email"
                label="Email"
                error="Please enter a valid email address"
              />
            </div>
          )}

          {activeTab === "toast" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <button
                onClick={() => showToast("Success!", "success")}
                className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md"
              >
                Show Success
              </button>
              <button
                onClick={() => showToast("Error!", "error")}
                className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
              >
                Show Error
              </button>

              <button
                onClick={() => showToast("Warning!", "warning")}
                className="p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors shadow-md"
              >
                Show Warning
              </button>
              <button
                onClick={() => showToast("Information", "info")}
                className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
              >
                Show Info
              </button>
            </div>
          )}

          {activeTab === "sidebar" && (
            <div className="flex justify-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="
                  w-full sm:w-auto p-3 md:px-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center gap-2
                hover:bg-indigo-600 transition-all active:scale-95 shadow-lg"
              >
                <Menu size={20} /> Open Sidebar
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </div>

      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        items={MENU_ITEMS}
      />
    </div>
  );
};

export default ComponentLibraryDemo;