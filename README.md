# 💻 Infotrônica

> **Inovação & Tecnologia desde 1997**

Projeto de uma **Single Page Application (SPA)** desenvolvida em React, focado na apresentação institucional e no catálogo de computadores e periféricos da **Infotrônica**.

---

## 📋 Sobre o Projeto

Este projeto visa criar uma experiência de navegação fluida e moderna para os clientes da loja. As principais características incluem:

- **Navegação Híbrida:** Utilização de âncoras para seções na página inicial e rotas dedicadas para páginas internas detalhadas.
- **Catálogo de Produtos:** Organização clara com seções separadas para **Computadores** e **Periféricos**.
- **Design Responsivo:** Layout adaptável a diferentes tamanhos de tela (Mobile/Desktop).
- **Identidade Visual:** Tema escuro (Dark Mode) com efeitos "glow" (brilho), remetendo ao universo gamer e tecnológico.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas e bibliotecas:

- ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) **React**
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite**
- **Wouter** (gerenciamento de rotas leve)
- **CSS Modules** (estilização)

---

## 📥 Como Instalar e Executar

Siga os passos abaixo para rodar o projeto em sua máquina local.

### 1. Clone o repositório

```bash
git clone [https://github.com/seu-usuario/infotronica.git](https://github.com/seu-usuario/infotronica.git)
cd infotronica
```

### 2. Instale as dependências

Certifique-se de instalar todas as dependências, incluindo o Wouter:

**Usando npm:**
```bash
npm install
```

**Usando yarn:**
```bash
yarn install
```

### 3. Inicie o servidor

**Usando npm:**
```bash
npm start
```

**Usando yarn:**
```bash
yarn start
```

> 📍 O projeto estará acessível em: `http://localhost:3000`

---

## 🛣️ Estrutura de Rotas

O projeto utiliza o **Wouter** para gerenciamento de rotas devido à sua leveza e simplicidade. Abaixo está a estrutura principal configurada no `App.jsx`:

```jsx
import { Route, Link, Switch } from 'wouter';
import Home from './pages/Home';
import Computers from './pages/Computers';
import Peripherals from './pages/Peripherals';

function App() {
  return (
    <div>
      {/* Barra de Navegação */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/computers">Computadores</Link>
        <Link href="/peripherals">Periféricos</Link>
      </nav>

      {/* Definição das Rotas */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/computers" component={Computers} />
        <Route path="/peripherals" component={Peripherals} />
      </Switch>
    </div>
  );
}

export default App;
```

---

<div align="center">
  <sub>Desenvolvido para o projeto Infotrônica</sub>
</div>
