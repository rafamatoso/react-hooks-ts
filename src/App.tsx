import { useEffect, useState } from 'react';

interface User {
  name: 'string';
  login: 'string';
  avatarUrl: 'string';
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>();

  async function loadData() {
    const response = await fetch('https://api.github.com/users/rafamatoso');
    const data = await response.json();

    setUser(data);
  }

  useEffect(() => {
    loadData();
  }, [user]);

  return (
    <h1>{user?.name}</h1>
  );
};

export default App;
