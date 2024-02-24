// src/context/AuthContext.tsx
import React, {createContext, useContext, useState, ReactNode} from 'react';

type AuthContextType = {
  user: any;
  login: (userDetails: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<any>(null);

  const login = (userDetails: any) => {
    setUser(userDetails);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
