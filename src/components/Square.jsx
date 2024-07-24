import { useState } from 'react'

export const Square = ({ children, updateBoard, index }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    isSelected? setIsSelected(false) : setIsSelected(true)
    updateBoard(index)
  }
  
  return (
    <button onClick={handleClick} className={`square ${isSelected ? "is-selected" : ""}`}>
      {children}
    </button>
  )
}
