# Angular
Este repositório no GitHub contém múltiplos projetos em Angular, alguns com a biblioteca de componentes (POUI), e integrado com a biblioteca Protheus-Lib-Core da TOTVS.

[Integração Angular em PO UI no Protheus](https://github.com/ti-asabranca/po-ui/files/13689431/BDC-Integracao.Angular.em.PO.UI.no.Protheus-151223-194920.pdf)
Manual baseado e instalado nas depedencias da pasta: *projeto-exemplo-basico*


Comandos (product-store):

npx -p @angular/cli@17 ng new product-store --skip-tests

ng add @angular/material

code product-store

npm install

ng serve -o

npx ng g c shared/component/header

npx ng g c features/list   --> Cria Componente

npm i -D json-server

npx json-server db.json    --> Rodar API BackEnd Json Server

npx ng g s shared/services/products          --> Cria Serviço
