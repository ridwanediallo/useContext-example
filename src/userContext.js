import { useState, createContext } from 'react';

const AuthContext = createContext({
    username: ''
});

export const AuthContextProvider = ({ Children }) => {
    const [username, setUsername] = useState('owais');

  return (
    <AuthContext.Provider
      value={{
        username: username,
        updateUsername: setUsername,
      }}
    >
      {Children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

