import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/projectCard';

const GITHUB_USERNAME = 'Hurricane-007'; // <-- Replace with your GitHub username

const AboutPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {repos.map(repo => (
        <ProjectCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          html_url={repo.html_url}
        />
      ))}
    </div>
  );
};

export default AboutPage;