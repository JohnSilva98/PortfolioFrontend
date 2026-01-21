# Portfolio Frontend (React + Vite)

Portfólio pessoal com páginas PT/EN, sidebar de habilidades e galeria de projetos.
Os projetos listados são mini-sites estáticos hospedados em `public/Projetos`.

## Estrutura do projeto

- `src/main.jsx`: bootstrap da aplicação React + Router.
- `src/App.jsx`: rotas `/` (PT) e `/en` (EN).
- `src/pages/HomePt.jsx`: página principal em português.
- `src/pages/HomeEn.jsx`: página principal em inglês.
- `src/styles.css`: estilos globais migrados do projeto HTML original.
- `public/Portfólio`, `public/Projetos`, `public/img`: assets e projetos estáticos.

## Como rodar

```bash
npm install
npm run dev
```

## Build e preview

```bash
npm run build
npm run preview
```

## Como editar conteúdo

- Texto e links da versão PT: `src/pages/HomePt.jsx`.
- Texto e links da versão EN: `src/pages/HomeEn.jsx`.
- Projetos na galeria: são links para HTML estático em `public/Projetos`.
- Estilos globais: `src/styles.css`.

## Observações de segurança

- `npm audit` não encontrou vulnerabilidades na árvore atual.
- Links externos usam `rel="noreferrer"` para evitar tabnabbing.
