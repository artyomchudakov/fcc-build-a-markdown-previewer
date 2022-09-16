import { useState, useEffect } from 'react';
import { ProjectDescription } from './ProjectDescription';
import { initialEditorText } from './initialEditorText';
import { marked } from 'marked';
import './style.css';

export default function MarkdownPreviewer() {
  const [userInput, setUserInput] = useState(initialEditorText);

  useEffect(() => {
    parseAndDisplay(userInput);
  }, [userInput]);

  return (
    <div>
      <h1 className="project-name">Markdown Previewer</h1>
      <div className="markdownPreviewer">
        <section>
          <SectionTitle title={'Editor'} />
          <textarea
            id="editor"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
        </section>
        <section>
          <SectionTitle title={'Preview'} />
          <div id="preview"></div>
        </section>
        <ProjectDescription
          challengeLink="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer"
          challengeName="Build a Markdown Previewer"
        />
      </div>
    </div>
  );
}

function parseAndDisplay(userInput) {
  const container = document.getElementById('preview');
  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  container.innerHTML = marked.parse(userInput);
}

function SectionTitle({ title }) {
  return (
    <div className="headers">
      <p>{title}</p>
    </div>
  );
}
