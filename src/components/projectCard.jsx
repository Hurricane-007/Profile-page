import React from 'react';

const ProjectCard = ({ name, description, html_url }) => {
  return (
    <div className="bg-slate-900/80 rounded-xl shadow-md p-6 border border-slate-700 m-2 w-full max-w-md">
      <h3 className="text-xl font-bold text-blue-400 mb-2">{name}</h3>
      <p className="text-slate-300 mb-4">{description || "No description provided."}</p>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;