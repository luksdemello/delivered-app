<h1 align="center">
 Delivery App <br>
 Node | Angular | Flutter
</h1>

<p align="center">
 <img alt="github license" src="https://img.shields.io/github/license/luksdemello/delivered-app" />
</p>

<p align="center">
 <a href="#sobre-o-projeto">Sobre</a> | 
 <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> | 
 <a href="#como-executar-o-projeto">Como executar</a> | 
 <a href="#licença">Licença</a> | 
 <a href="#autor">Autor</a>
</p>

# Sobre o Projeto

https://app-delivery-d0d71.web.app

O Delivery app é uma aplicação full stack web e mobile construída para adquirir conhecimento.

A aplicação consiste em entrega de pedidos, onde o usuário seleciona o pedido no app web, e o motoboy entrega e completa o pedido no mobile.

O Design do projeto foi feito pela equipe da DevSuperior, onde o mesmo foi projetado em java, react e react-native, mas para afins de estudo eu utilizei o layout e fiz o projeto em node, angular e flutter.

## Layout Mobile
<p align="center">
 <img src="https://user-images.githubusercontent.com/69207514/156283393-78710fcd-a874-4e04-ba33-76125d3df858.png" width="300px"/>
 <img src="https://user-images.githubusercontent.com/69207514/156283508-f15ed314-df94-4daa-a367-5c06602f70cd.png" width="300px"/>
 <img src="https://user-images.githubusercontent.com/69207514/156283576-804da0c6-d39d-4132-a2ec-b518d4371418.png" width="300px"/>
</p>


## Layout Web
<p align="center">
 <img src="https://user-images.githubusercontent.com/69207514/156283856-d502726b-f667-477d-8f9d-7d5923aa58a9.png""/>
</p>

# Tecnologias utilizadas

## Backend
  * [Nodejs](https://nodejs.org/en/)
  * [Typescript](https://www.typescriptlang.org/)
  * [Postgres](https://www.postgresql.org/)
## Frontend
  * [Angular](https://angular.io/)
## Mobile
  * [Flutter](https://flutter.dev/)

## Implantação em produção
  * Back end: [Heroku](https://www.heroku.com/home)
  * Front end: [Firebase](https://firebase.google.com/?hl=pt)

# Como executar o projeto
* Pré-requisitos
  * É necessário possuir o git instalado.
  * É necessário possuir o [Nodejs](https://nodejs.org/en/) v16.13.0 ou superior instalado.
  * É necessário ter o [Postgres](https://www.postgresql.org/) instalado ou um container com a imagem do postgres no [Docker](https://www.docker.com/get-started)
  * É necessário possuir o cli do [Angular](https://angular.io/) instalado.
  * É necessário possuir o [Flutter](https://github.com/flutter/flutter.git) 2.10.1 • channel stable. 

## Faça o clone do repositório:
```bash
$ git clone https://github.com/luksdemello/delivered-app.git
```

## Backend
  1. Entre na pasta: 
  ```bash
  $ cd backend
  ```
  2. Crie um arquivo .env conforme exemplo no diretório com as variáveis de acesso para conectar ao seu postgres.
  3. Rode o script.sql que esta situado dentro do diretório src/database no pgAdmin ou algum software de administração de banco de dados de seu gosto.
  4. Execute os comandos:
  ```bash
    # para instalar as dependencias do projeto
    $ npm install

    # para rodar o projeto
    $ npm run dev
  ```

## Frontend
  ```bash
  # acesse a pasta do projeto web
  $ cd front-web

  # para instalar as dependencias do projeto
  $ npm install

  # para rodar o projeto
  $ ng serve -o
  ```

## Mobile

  ```bash
  # acesse a pasta do projeto web
  $ cd mobile

  # para instalar as dependencias do projeto
  $ flutter pub get

  
  # conecte seu device e rode o comando para rodar o projeto
  $ flutter run
  ```

# Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

# Autor
Lucas de mello

[linkedin](https://www.linkedin.com/in/lucas-mello-357ba7197/)
