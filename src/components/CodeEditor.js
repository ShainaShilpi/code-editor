import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Import the CSS for the desired theme
import './CodeEditor.css'; // Custom styles for the editor

const initialCode = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`;

const CodeEditor = () => {
    const [code, setCode] = useState(initialCode);

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const highlightCode = (code) => {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    };

    return (
        <div className="code-editor-container">
            <div className="header">Simple Code Editor</div>
            <div className="code-editor">
                <textarea
                    className="code-input"
                    value={code}
                    onChange={handleChange}
                    placeholder="Type your code here..."
                    spellCheck={false} // Disable spell check
                />
                <pre className="code-output">
                    <code
                        dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
                    />
                </pre>
            </div>
        </div>
    );
};

export default CodeEditor;
