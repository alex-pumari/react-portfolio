import { useState, useEffect } from 'react'
import { getRepositories } from '../services/repositories'

export function useRepositories() {
  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    getRepositories()
      .then(repositories => {
        console.log(repositories)
        setRepositories(repositories)
      })
      .catch(error => {
        console.log(error)
        setRepositories([])
      })
  }, [])
  return { repositories }
}