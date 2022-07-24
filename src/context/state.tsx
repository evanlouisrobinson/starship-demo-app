import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AppContextInterface {
  currentPage: string,
  setCurrentPage: Function,
  pages: {
    name: string,
    url: string,
  }[],
}

const AppContext = createContext<AppContextInterface | null>(null);

type AppWrapperProps = {
  children: ReactNode,
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [currentPage, setCurrentPage] = useState("home");
  let sharedState: AppContextInterface = {
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    pages: [
      {name: "Home", url: "/"},
      {name: "Films", url: "/FilmsPage"},
      {name: "People", url: "/PeoplePage"},
      {name: "Planets", url: "/PlanetsPage"},
      {name: "Species", url: "/SpeciesPage"},
      {name: "Starships", url: "/StarshipsPage"},
      {name: "Vehicles", url: "/VehiclesPage"},
    ],
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}