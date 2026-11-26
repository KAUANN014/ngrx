# Gerenciamento de servidores com NgRx

Aplicação Angular de estudo que implementa gerenciamento de estado com NgRx para dados de servidores. O código está organizado em actions, effects, reducers, selectors, serviço e modelo de dados.

## Conceitos explorados
- Store e estado da aplicação
- Actions
- Effects para operações assíncronas
- Reducers para atualização de estado
- Selectors
- Serviço de comunicação com API

## Tecnologias
- Angular 19
- NgRx Store
- NgRx Effects
- TypeScript
- RxJS
- Bootstrap

## Executar
```bash
npm install
npm start
```
Acesse http://localhost:4200.

## Build e testes
```bash
npm run build
npm test
```

A aplicação depende de uma API configurada para carregar os dados. Confira os arquivos de ambiente e o endpoint do serviço antes de executar os fluxos de consulta.