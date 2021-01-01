import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import AppContext from './AppContext';

const GITHUB_URL = 'https://api.github.com/users/rafamatoso/repos';

interface Repos {
  name: 'string';
}

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repos[]>();

  const inputRef = useRef<HTMLInputElement>(null);

  async function loadData() {
    const response = await fetch(GITHUB_URL);
    const data = await response.json();

    setRepos(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const repoNames = useMemo(() => repos?.map((repo) => repo.name).join(', '), [repos]);

  const doCallback = useCallback(() => {
    repos?.map((repo) => repo.name).join(', ');
  }, [repos]);

  inputRef.current?.focus();

  return (
    <>
      <h2>useState, useEffect e useMemo</h2>
      <p>{repoNames}</p>

      <hr />

      <h2>useCallback</h2>
      <button type="button" onClick={() => doCallback()}>Executar callBack</button>

      <hr />

      <h2>useRef</h2>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>

      <hr />

      <h2>useContext</h2>
      <AppContext />
    </>
  );
};

export default App;
