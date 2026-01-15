# React Component Library

A professional UI component library built with **React**, **TypeScript**, and **Tailwind CSS**. This project features interactive documentation powered by **Storybook** and a comprehensive demonstration page showcasing all implemented components.

## 🚀 Live Preview

Deployed version of storybook: https://kirky359.github.io/react-component-library/
---

## 📦 Components

The library includes three core components developed from scratch:

* **Input**: A smart input field supporting multiple types (password, email, number), a password visibility toggle, and a clearable functionality.
* **Toast**: A notification system featuring auto-dismiss, smooth transitions, and multiple variants (success, error, warning, info).
* **Sidebar Menu**: A sliding navigation menu with support for multi-level nested submenus and a functional backdrop.

---

## 🛠 Tech Stack

* **React 19** (Next.js App Router)
* **TypeScript** for strict type safety
* **Tailwind CSS v4** for modern utility-first styling
* **Storybook 10** for component documentation and isolated testing
* **Lucide React** for a consistent icon system

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Ensure you have **Node.js** and **npm** (or yarn) installed on your machine.

### Installation & Running

1. **Clone the repository:**
```bash
git clone https://github.com/kirky359/react-component-library.git

```


2. **Navigate to the project directory:**
```bash
cd react-component-library

```


3. **Install NPM packages:**
```bash
npm install

```


4. **Start the Development Server (Next.js):**
```bash
npm run dev

```

5. **Start Storybook:**
```bash
npm run storybook

```

---

## 📸 Screenshots

### 1. Input Component
![Input Component](./public/screenshots/Input.png)
![Input Password](./public/screenshots/Input_password.png)

### 2. Toast Notifications
![Toast Stack](./public/screenshots/Toast_messages.png)

### 3. Sidebar Menu
![Sidebar Open](./public/screenshots/Sidebar_open.png)


### 4. Storybook Dashboard
![StoryBook input test](./public/screenshots/storybook_input.png)
![StoryBook menu test](./public/screenshots/storybook_menu.png)
![StoryBook toast test](./public/screenshots/storybook_toast.png)

---

## 📁 Project Structure

```text
src/
├── app/              # Next.js App Router (Demo Page)
├── components/       # Component source code
│   ├── Input/        # Input logic, styles, and stories
│   ├── SidebarMenu/  # Sidebar logic, styles, and stories
│   └── Toast/        # Toast logic, styles, and stories
├── constants/        # Configuration and static data
├── types/            # Shared TypeScript interfaces
└── index.ts          # Public library API