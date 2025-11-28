import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import ProdutosPage from './pages/ProdutosPage'
import PedidosPage from './pages/PedidosPage'
import ComputadoresPage from './pages/ComputadoresPage'
import PerifericosPage from './pages/PerifericosPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtos" component={ProdutosPage} />
      <Route path="/pedidos" component={PedidosPage} />
      <Route path="/loja-computadores" component={ComputadoresPage} />
      <Route path="/loja-perifericos" component={PerifericosPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
