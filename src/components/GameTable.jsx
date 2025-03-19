import { useState } from 'react'
import { useNumberTable } from '../Hooks/customTable.jsx'
import { checkWinner } from '../Logic/logic.js'
// import { checkWinner, saveGame, contador } from "../Logic/logic"
import { Square } from '../components/Square.jsx'
import { WinnerModal } from '../components/winnerModal'

function NumbersSelectedTable() {
  const { numbersSelected } = useNumberTable()

  return (
    <article>
      <header>Tus numeros ganadores</header>
      <div>{numbersSelected}</div>
    </article>
  )
}

export function GameTable() {
  const [array, setArray] = useState(Array(25).fill(null))
  const { numbersTable, setNumTable, numbersSelected, setNumbersSelected } =
    useNumberTable()

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    const reset = Array.from({ length: 25 }, () =>
      Math.floor(Math.random() * 100)
    )
    setNumTable(reset)
    setNumbersSelected([])
    setArray(Array(25).fill(null))
    setWinner(null)
    window.localStorage.removeItem('board')
  }

  const updateBoard = (index) => {
    const board = [...numbersTable]
    let sltdNumbers = [...numbersSelected]
    let element = board[index]

    sltdNumbers.includes(board[index])
      ? (sltdNumbers = sltdNumbers.filter((f) => f != board[index]))
      : sltdNumbers.push(board[index])
    setNumbersSelected(sltdNumbers)

    let nextIndex = [...array]
    nextIndex.includes(element)
      ? (nextIndex = nextIndex.filter((f) => f != nextIndex[index]))
      : (nextIndex[index] = element)
    setArray(nextIndex)

    const newWinner = checkWinner(nextIndex)
    if (newWinner) {
      setWinner(nextIndex)
    }
    if (winner) return
  }

  // Guarda en localSt
  // useEffect(() => {
  //   const saveBoard = [...numbersTable]
  //   saveGame({
  //     boardLocalSt: saveBoard
  //   })
  // }, [numbersTable])

  return (
    <>
      <section className='board'>
        <NumbersSelectedTable />
        <div className='game'>
          {numbersTable.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {numbersTable[index]}
              </Square>
            )
          })}
        </div>
        {winner !== null && (
          <WinnerModal winnersModal={winner} resetGameModal={resetGame} />
        )}
      </section>
    </>
  )
}
