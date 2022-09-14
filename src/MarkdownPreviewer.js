import { useState, useEffect } from 'react';
import { ProjectDescription } from './ProjectDescription';
import { marked } from 'marked';
import './style.css';

export default function MarkdownPreviewer() {
  const initialText = `1. List item one.
+
List item one continued with a second paragraph followed by an
Indented block.
+
.................
$ ls *.sh
$ mv *.sh ~/tmp
.................`;
  const [value, setValue] = useState(initialText);
  // if (value) previewer(value);
  useEffect(() => {
    parseAndDisplay(value);
  }, [value]);
  return (
    <section className="markdownPreviewer">
      <div className="container">
        <div className="headers">
          <p>Editor</p>
        </div>
        <textarea
          id="editor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
      <div className="container">
        <div className="headers">
          <p>Preview</p>
        </div>
        <div id="preview"></div>
      </div>
      <ProjectDescription name="Build a Markdown Previewer" />
    </section>
  );
}

function parseAndDisplay(userInput) {
  const container = document.getElementById('preview');
  container.innerHTML = marked.parse(userInput);
}
