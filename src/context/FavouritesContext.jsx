import { createContext, useContext, useState } from 'react'

const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([])

  function toggleFavourite(product) {
    setFavourites(prev => {
      const exists = prev.find(p => p._id === product._id)
      if (exists) return prev.filter(p => p._id !== product._id)
      return [...prev, product]
    })
  }

  function isFavourite(id) {
    return favourites.some(p => p._id === id)
  }

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}