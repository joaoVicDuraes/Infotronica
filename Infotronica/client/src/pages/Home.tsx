import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import ServiceCard from '../components/common/ServiceCard/ServiceCard'
import Computadores from '../sections/Computadores/Computadores'
import Perifericos from '../sections/Perifericos/Perifericos'
import SobreNos from '../sections/SobreNos/SobreNos'
import Manutencao from '../sections/Manutencao/Manutencao'
import Faq from '../sections/Faq/Faq'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <ServiceCard />
      <Computadores />
      <Perifericos />
      <SobreNos />
      <Manutencao />
      <Faq />

      <Footer />
    </div>
  )
}
