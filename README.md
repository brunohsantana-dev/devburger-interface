# React + Vite

Frontend do DevBurger com React, Vite e Biome.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Lint e formatação

- `pnpm check`: verifica lint, formatação e organização dos imports.
- `pnpm lint`: verifica somente lint.
- `pnpm format`: aplica formatação.
- `pnpm check:write`: aplica formatação, organização de imports e correções seguras.
- `pnpm dev`: inicia o desenvolvimento.
- `pnpm build`: gera o build de produção.

No VS Code, instale a extensão **Biome** (`biomejs.biome`). As configurações
locais habilitam a formatação ao salvar e desabilitam ESLint e Prettier neste
projeto. Se necessário, use **Disable (Workspace)** nas extensões ESLint e
Prettier e execute **Developer: Reload Window**. Nenhuma configuração global é
necessária. Não use `--unsafe` para correções automáticas.
