import { createContext, useState, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}

interface AppContextProps {
  user: User | null;
  setUser: (user: User) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
};
