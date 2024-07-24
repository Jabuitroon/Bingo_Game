import { useContext } from 'react'
import { TableContext } from '../context/table'

export const useNumberTable = () => {
    const { numbersTable, setNumTable, numbersSelected, setNumbersSelected } = useContext(TableContext)

    return { numbersTable, setNumTable, numbersSelected, setNumbersSelected }
}