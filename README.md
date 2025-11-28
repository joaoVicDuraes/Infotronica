# 💻 Infotrônica

> **Inovação & Tecnologia desde 1997**

Projeto de uma Single Page Application (SPA) em React, focado na apresentação institucional e catálogo de computadores e periféricos da **Infotrônica**.

## 📋 Sobre o Projeto

- **Navegação Híbrida** com âncoras na página inicial e rotas dedicadas para páginas internas.
- **Catálogo de Produtos** com seções para **Computadores** e **Periféricos**.
- **Design Responsivo** e identidade visual com tema escuro e efeitos "glow".

## 🛠️ Tecnologias Utilizadas

- **React**
- **React Router** ou **Wouter** (gerenciamento de rotas)
- **CSS Modules**
- **Vite**

---

## 📥 Como Instalar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/infotronica.git
Instale as dependências:

Com npm:

bash

npm install
Com yarn:

bash

yarn install
Inicie o servidor:

Com npm:

bash

npm start
Com yarn:

bash

yarn start
Acesse o projeto em http://localhost:3000.

🛣️ Usando o Wouter
Se preferir usar Wouter para roteamento:

1. Instalar Wouter
bash

npm install wouter
2. Exemplo de Implementação
src/App.js:
javascript

import { Route, Link, Switch } from 'wouter';
import Home from './pages/Home';
import Computers from './pages/Computers';
import Peripherals from './pages/Peripherals';

function App() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/computers">Computadores</Link>
        <Link href="/peripherals">Periféricos</Link>
      </nav>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/computers" component={Computers} />
        <Route path="/peripherals" component={Peripherals} />
      </Switch>
    </div>
  );
}

export default App;
