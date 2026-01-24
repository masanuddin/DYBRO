import { createContext, useContext, useState, ReactNode } from "react";

type ChildContextType = {
  childName: string;
  setChildName: (name: string) => void;
};

const ChildContext = createContext<ChildContextType | null>(null);

export const ChildProvider = ({ children }: { children: ReactNode }) => {
  const [childName, setChildName] = useState("Emma");

  return (
    <ChildContext.Provider value={{ childName, setChildName }}>
      {children}
    </ChildContext.Provider>
  );
};

export const useChild = () => {
  const ctx = useContext(ChildContext);
  if (!ctx) throw new Error("useChild must be used inside ChildProvider");
  return ctx;
};