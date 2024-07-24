import { PlayerTg } from './components/PlayerTg'
import { TableProvider } from './context/table.jsx'
import { GameTable } from './components/GameTable.jsx'

export function App() {
  const saludo = (userName) => `Participante: ${userName}`
  const pImg = 'kid_boy'

  return (
    <main className='main'>
      <section className="comb-win">
        Guia de la Figura ganadora
      </section>
      <section className='playerTg'>
        <PlayerTg saludo={saludo} userName='Buicyn Gpr' initialIsBingo playerImg={pImg} />
        <TableProvider>
          <GameTable />
        </TableProvider>
      </section>
    </main>
  )
}
