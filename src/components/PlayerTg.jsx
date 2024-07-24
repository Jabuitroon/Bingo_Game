import { useState } from 'react'

// saludo es una función que traemos como prop y entonces le tenemos que dar argumentos
// Servirá para hacer fetching de datos o cambios de estado
export function PlayerTg({saludo, name, userName, playerImg, initialIsBingo}) {
    const pImg = `/src/img/${playerImg}.png`

    const [isBingo, setBingo] = useState(initialIsBingo)

    const bingoWin = isBingo ? 'BINGOOOOO!' : 'Participando'
    const bingoClass = isBingo ? 'player-card-button-bingo' : 'player-card-button'

    const handleClick = () => {
        setBingo(!isBingo)
    }
    return (
      <article className='player-card'>
        <header className='player-card-header'>
          <img className='player-card-avatar' src={pImg} />
          <div className='player-card-info'>
            <strong>{userName}</strong>
            <span>{saludo('player1')}</span>
          </div>
        </header>
        <aside>
          <button className={bingoClass} onClick={handleClick}>{bingoWin}</button>
        </aside>
      </article>
    )
}
