import { Annonces } from '../datas/Annonces'
import Annoce from './Annoce'

function BlocCard() {
  return (
    <section className="cards">
      {Annonces.map((data, x) => (
        <Annoce data={data} key={'Annoce' + x} />
      ))}
    </section>
  )
}

export default BlocCard
