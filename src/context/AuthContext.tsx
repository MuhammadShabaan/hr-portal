import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { User } from '@/types/Types';

interface AuthContext {
  token: string;
  user: User;
}

interface AuthObject {
  token: string;
  model: User;
}

interface AuthContextProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const parseAuthData = (): AuthContext | undefined => {
    try {
      const data: AuthObject | null = JSON.parse(localStorage.getItem('pocketbase_auth') || 'null');

      if (!data?.token || !data?.model) return undefined;

      return {
        token: data.token,
        user: data.model,
      };
    } catch (error) {
      console.error('Error parsing authentication data:', error);
      // Handle the error gracefully, maybe redirect to a login page or take appropriate action
      return undefined;
    }
  };

  const [contextValue, setContextValue] = useState<AuthContext | undefined>(() => parseAuthData());

  useEffect(() => {
    const handleStorageChange = () => {
      setContextValue(parseAuthData());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Create a custom hook to easily access the context
export const useAuth = (): { token: string; user: User } => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }

  return {
    token: context.token,
    user: context.user,
  };
};
