import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export interface IMainContext {
  activeSection: string | undefined
  setActiveSection: Dispatch<SetStateAction<string | undefined>>
}

export const MainContext = createContext<IMainContext | undefined>(undefined)

export const MainProvider = ({children}: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | undefined>(undefined)
  
  return (
    <MainContext.Provider value={{
      activeSection,
      setActiveSection
    }}>
      {children}
    </MainContext.Provider>
  )
}

export function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider");
  }
  return context;
}
