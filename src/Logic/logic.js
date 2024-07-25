import { winnerCombos } from "../const/bingoRq"

export const checkWinner = (boardToCheck) => {
    console.log(boardToCheck + 'Me traje esto')
    for (const i of winnerCombos) {  // Acá me demoré
        const [a, b, c, d, e] = i
        if (boardToCheck[a] && boardToCheck[b] && boardToCheck[c] && boardToCheck[d] && boardToCheck[e]) {
            return boardToCheck[a]
        }
    }
    return null
}

// localStorage
export const saveGame = ({boardLocalSt}) => {
    window.localStorage.setItem('board', JSON.stringify(boardLocalSt))
}

//Contador de Hamburguesas
export const contador = (boardCont) => {
    let cont = boardCont.filter((a)=> a == '🍔').length
   return cont
}
