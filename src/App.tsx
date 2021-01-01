import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

const GITHUB_URL = 'https://api.github.com/users/rafamatoso/repos';

interface Repos {
  name: 'string';
}

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repos[]>();

  async function loadData() {
    const response = await fetch(GITHUB_URL);
    const data = await response.json();

    setRepos(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const repoNames = useMemo(() => repos?.map((repo) => repo.name).join(', '), [repos]);

  const doCallback = useCallback(() => repos?.map((repo) => repo.name).join(', '), [repos]);

  return (
    <>
      <h2>useState, useEffect e useMemo</h2>
      <p>{repoNames}</p>

      <hr />

      <h2>useCallback</h2>
      <button type="button" onClick={() => doCallback()}>Executar callBack</button>

      <hr />

    </>
  );
};

export default App;
