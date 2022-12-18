import { useState, useContext } from 'react';
import AuthContext from './userContext';

export default function App() {
  const [username, setUsername] = useState('owais');
  return (
    <AuthContext.Provider
      value={{ username: username, updateUsername: setUsername }}
    >
      <User />
    </AuthContext.Provider>
  );
}

function User() {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <h2>{ctx.username}</h2>
      <UsernameEditor />
    </div>
  );
}

function UsernameEditor() {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <input
        type="text"
        value={ctx.username}
        onChange={(e) => ctx.updateUsername(e.target.value)}
      />
    </div>
  );
}
