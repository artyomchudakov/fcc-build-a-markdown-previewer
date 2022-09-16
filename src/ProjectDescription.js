import './style.css';

export function ProjectDescription({ challengeLink, challengeName }) {
  return (
    <div className="description">
      <a href={challengeLink} target="_blank" rel="noreferrer">
        freeCodeCamp - Front End Development Libraries Projects - {challengeName}
      </a>
    </div>
  );
}
