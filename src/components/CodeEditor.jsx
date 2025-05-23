import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';

export default function CodeEditor() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello, CodeMirror 6!</h1>
  </body>
</html>`);

  const onChange = (value) => {
      console.log('Updated Code:', value);
    setCode(value);
  };
  return (
    <div>
      <h2>React + CodeMirror 6 (HTML)</h2>
      <CodeMirror
        value={code}
        height="300px"
        extensions={[html()]}  
        onChange={onChange}
        theme="light" // or 'dark', 'dracula', etc.
      />
    </div>
  );
}
