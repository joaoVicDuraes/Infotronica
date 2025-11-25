# 💻 Infotrônica

> **Inovação & Tecnologia desde 1997**

Bem-vindo ao repositório do site oficial da **Infotrônica**. Este projeto é uma Single Page Application (SPA) desenvolvida em React, focada na apresentação institucional e catálogo de computadores e periféricos.

## 📋 Sobre o Projeto

O site serve como a vitrine digital da Infotrônica, combinando uma Landing Page moderna com seções de E-commerce. O projeto utiliza uma identidade visual "Tech/Gamer" com fundo escuro (Azul/Roxo) e destaques em Amarelo.

## 🚀 Funcionalidades

- **Navegação Híbrida:** - Menu inteligente que utiliza âncoras (`#`) na página inicial.
  - Rotas dedicadas (React Router) para páginas internas.
- **Catálogo de Produtos:**
  - Página exclusiva para **Computadores** (Gamer, Workstation).
  - Página exclusiva para **Periféricos**.
- **Design Responsivo:** Header com menu hambúrguer móvel e versão desktop.
- **Identidade Visual Personalizada:** Tema escuro com efeitos de "glow" e gradientes.

## 🛠️ Tecnologias Utilizadas

- **[React](https://reactjs.org/)**: Biblioteca principal.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas e navegação.
- **CSS Modules**: Estilização modularizada.
- **Vite**: Build tool e ambiente de desenvolvimento.

## 📂 Estrutura de Pastas

```text
src/
├── assets/             # Imagens e Logos
├── components/
│   ├── common/         # Botões, Títulos, Cards genéricos
│   └── layout/         # Header e Footer
├── sections/           # Seções da Home e Páginas de Loja
│   ├── Computadores/   # Inclui ComputadoresPage.jsx
│   ├── Perifericos/    # Inclui PerifericosPage.jsx
│   ├── SobreNos/
│   └── ...
├── App.jsx             # Configuração de Rotas
└── main.jsx            # Ponto de entrada