import './style.css';

export function ProjectDescription({ name }) {
  return (
    <div className="description">
      <a
        href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer"
        target="_blank"
        rel="noreferrer"
      >
        freeCodeCamp - Front End Development Libraries Projects - {name}
      </a>
    </div>
  );
}
