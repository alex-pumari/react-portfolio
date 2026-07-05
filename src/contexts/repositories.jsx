import { createContext, useContext } from 'react'
import { useRepositories } from '../hooks/useRepositories'

export const RepositoriesContext = createContext()

export default function RepositoriesProvider ({ children }) {
  const contextValues = useRepositories()
  return (
    <RepositoriesContext.Provider value={contextValues}>
      {children}
    </RepositoriesContext.Provider>
  )
}

export function useRepositoriesContext () {
  const context = useContext(RepositoriesContext)
  if (!context) {
    throw new Error('useRepositoriesContext must be used within a RepositoriesProvider')
  }
  return context
}