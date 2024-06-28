# Simple Code Editor

This project is a simple code editor built using React, Prism.js for syntax highlighting, and a Textarea HTML element for user input. The editor allows users to write and edit code with syntax highlighting for JavaScript.

## Features

- **Syntax Highlighting**: Utilizes Prism.js to provide syntax highlighting for JavaScript code.
- **Initial Code Snippet**: Pre-fills the editor with a basic React application code snippet.
- **Live Preview**: Displays the highlighted code as the user types.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Prism.js**: A lightweight, extensible syntax highlighter.
- **CSS**: For styling the code editor component.

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (version 6 or later) or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ShainaShilpi/code-editor.git
   cd code-editor

2. **Install dependencies**:

   ```bash
   npm install

### Running the Project

To start the development server, run:

    ```bash
    npm start

This will start the development server and open the project in your default web browser. If it doesn't open automatically, navigate to http://localhost:3000 in your browser.

### Project Structure

- **src/components/CodeEditor.js**: Contains the main code editor component.
- **src/components/CodeEditor.css**: Contains the styles for the code editor component.
- **public/index.html**: The HTML template.
- **src/index.js**: The JavaScript entry point.

### Code Explanation

**CodeEditor Component (src/components/CodeEditor.js)**

The **'CodeEditor'** component manages the code state and handles user input. It uses Prism.js to highlight the syntax and displays the code in a **'textarea'** and a **'pre'** element.

- **State Management**: Uses React's **'useState'** hook to manage the code input by the user.
- **Syntax Highlighting**: Uses Prism.js to highlight the code as the user types.
- **JSX Structure**: Renders a container with a header, a **'textarea'** for input, and a **'pre'** element to display the highlighted code.

**Styles (src/components/CodeEditor.css)**

The CSS file defines styles for the code editor, ensuring a clean and consistent layout:

- **Container**: Sets width, margin, and font styles.
- **Header**: Styles the header text.
- **Editor**: Styles the code editor container, textarea, and pre element.

### Usage

Upon loading the application, you will see a pre-filled code editor with a basic React application. You can type your code into the editor, and it will automatically highlight the syntax.

### Screenshots

![image](https://github.com/ShainaShilpi/code-editor/assets/98258789/fa23fe43-832a-4a95-b5ec-eb5282424075)
