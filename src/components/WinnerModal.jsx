export function WinnerModal({winnerModal, resetGameModal}) {
  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {
            winnerModal === false
            ? 'Revizando' :
            'BINGOOOOOOOOOOOOOOO'
          }
        </h2>
        <footer>
          <button onClick={resetGameModal}>Reniciar</button>
        </footer>
      </div>
    </section>
  )
}
