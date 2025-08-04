import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const client = new GitClient();

  useEffect(() => {
    client.getRepositories('techiesyed').then(data => setRepos(data));
  }, []);

  return (
    <div className="container">
      <h2>Git repositories of User - TechieSyed</h2>
      <ul>
        {repos.map((repo, i) => (
          <li key={i}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
