import './App.css'
import ServiceCard from './components/common/ServiceCard/ServiceCard.jsx'
import Header from './components/layout/Header/Header.jsx'
import Computadores from './sections/Computadores/Computadores.jsx'
import Perifericos  from './sections/Perifericos/Perifericos.jsx'
import SobreNos from './sections/SobreNos/SobreNos.jsx'
import Manutencao from './sections/Manutencao/Manutencao.jsx'
import Footer from './components/layout/Footer/Footer.jsx'
import Faq from './sections/Faq/Faq.jsx'
function App() {

  return (
    <>
      <Header />
      <ServiceCard />
      <Computadores></Computadores>
      <Perifericos/>
      <SobreNos/>
      <Manutencao/>
      <Faq/>
      <Footer />

    </>
  )
}

export default App
