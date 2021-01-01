import { useEffect, useMemo, useState } from 'react';

const GITHUB_URL = 'https://api.github.com/users/rafamatoso/repos';

interface User {
  name: 'string';
  login: 'string';
  avatarUrl: 'string';
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>();

  async function loadData() {
    const response = await fetch(GITHUB_URL);
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const repoNames = useMemo(() => users?.map((user) => user.name).join(', '), [users]);

  return (
    <h1>{repoNames}</h1>
  );
};

export default App;
