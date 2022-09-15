import { useState, useEffect } from 'react';
import { ProjectDescription } from './ProjectDescription';
import { initialEditorText } from './helper';
import { marked } from 'marked';
import './style.css';

export default function MarkdownPreviewer() {
  const [value, setValue] = useState(initialEditorText);
  useEffect(() => {
    parseAndDisplay(value);
  }, [value]);
  return (
    <div className="markdownPreviewer">
      <section>
        <TitleSection title={'Editor'} />
        <textarea
          id="editor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </section>
      <section>
        <TitleSection title={'Preview'} />
        <div id="preview"></div>
      </section>
      <ProjectDescription name="Build a Markdown Previewer" />
    </div>
  );
}

function parseAndDisplay(userInput) {
  const container = document.getElementById('preview');
  container.innerHTML = marked.parse(userInput);
}

function TitleSection({ title }) {
  return (
    <div className="headers">
      <p>{title}</p>
    </div>
  );
}
