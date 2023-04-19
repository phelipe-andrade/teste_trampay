# Teste Trampay

Este este projeto é para a empresa Trampay. É uma aplicação web para gerenciamento de informações enviadas por arquivos CSV desenvolvida utilizando Next.js(React.js) no front-end e Node.js(Nest.js) no back-end.

## Linguagens, bibliotecas e frameworks utilizados

### Back-end:
 * Nest.js: framework de aplicação web para Node.js;
 * Bcrypt: biblioteca utilizada para criptografia de senhas;
 * Jsonwebtoken: biblioteca utilizada para autenticação baseada em tokens JWT;
 * Prisma.io: ORM (Object Relational Mapping) para Node.js;
 * PostegreSQL: Banco de dados Relacionais.

### Front-end:

 * Next.js: framework para desenvolvimento de aplicações web com base no React.js;
 * Redux: Para gerenciamento de estado da aplicação.
 * CsvToJson: Para o tratamento do arquivo CSV.

## Execução do projeto

### Back-end:
 * Acesse a pasta do projeto: cd back-end;
 * Instale as dependências do projeto: `npm install`;
 * Configure as variáveis de ambiente no arquivo .env;
 * Execute o comando `npm run start:prod` para iniciar a aplicação.

### Front-end:

 * Acesse a pasta do projeto: cd front-end;
 * Instale as dependências do projeto: `npm install`;
 * Execute os comandos `npm run build` e `npm run start` para iniciar a aplicação;
 * Abra o navegador e acesse o endereço http://localhost:3001 para visualizar a aplicação.
 
  ### .env
 
  Somente o back-end precisa das variáveis de ambiente. Por motivo de segurança, o token do email vai ser passado pelo e-maiil do envio do teste.
 
  * DATABASE_URL="postgresql://root:root@localhost:5432/teste_trampay?schema=public"
  * JWT_SECRET="defaultSecret"
  * EMAIL_TOKEN=

## Docker Compose

Para facilitar a criação da instância do banco de dados utilizado no projeto, disponibilizamos um arquivo docker-compose.yml na pasta back-end.

Esse arquivo permite a criação de um container com uma instância do banco de dados PostgreSQL configurada com as mesmas credenciais utilizadas na aplicação. Para executar o banco de dados com o Docker Compose, siga os seguintes passos:

 * Acesse a pasta back-end do projeto;
 * Certifique-se de que o Docker e o Docker Compose estão instalados no seu sistema;
 * Execute o comando docker-compose up -d para criar e executar o container em segundo plano;
 * Para interromper a execução do container, execute o comando docker-compose down.
 
