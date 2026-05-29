import React from 'react';
import { SqlIcon } from './icons.jsx';

export const SkillIcon = ({ icon }) => {
  if (icon === 'custom/sql') {
    return <SqlIcon />;
  }

  if (icon === 'custom/mlflow') {
    return <span className="skill-custom-icon">ML</span>;
  }

  return (
    <img
      className="skill-logo"
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.replace('devicon/', '')}`}
      alt=""
      width="42"
      height="42"
      loading="lazy"
    />
  );
};
