import { createContext, useState } from 'react'

export const TableContext = createContext()

export function TableProvider({ children }) {
  const [numbersTable, setNumTable] = useState(() => {
    return Array.from({ length: 25 }, () => Math.floor(Math.random() * 100))
  })
  const [numbersSelected, setNumbersSelected] = useState([])

  return (
    <TableContext.Provider value={{ numbersTable, setNumTable, numbersSelected, setNumbersSelected }}>
      {children}
    </TableContext.Provider>
  )
}
