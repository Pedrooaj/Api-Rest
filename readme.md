
# Api Rest + Sequelize

Este e um projeto onde utilizei uma ORM bem famosa chamada Sequelize, juntamente com o banco de dados MariaDB. Neste projeto foi utilizado o conceito de Api Rest juntamente com a biblioteca ExpressJS para realizarmos a criação de um sistema onde temos fluxo de login e adição,remoção,alteração e adição de fotos para os alunos.

# Conceitos

- **Orientação a Objetos** Neste projeto como principio eu utilizei os conceitos de programação orientada a Objetos com Javascript aplicando eles em meu Express App, Models e Controllers.
- **Sequelize** foi utilizado o sequelize como ORM para realizarmos a modelagem do banco de dados com javascript, onde configuei desde o reconhecimento do sequelize na aplicação e suas respectivas rotas de Migration e Configuração, e támbem a conexão do banco de dados até a modelagem das tabelas com migrations e listagem de models juntamente com a conexão do Banco de Dados. 
- **Json Web Token**, utilizado para validação de sessão e sistema de login com usuários, por conta de sua leveza e támbem segurança do JWT. Foram Utilizados conceitos desde a geração de tokens apenas com a verificação e validade dos dados com o banco de dados como email e senha, além de armazenar e disponibilizar dados de identificação como Id, Email e permissões com base na verificação e validação do Token.
- **Sucrase** e um compilador semelhante ao babel, com ele nos podemos utilizar type module do ES6+ além de ter alta compatibilidade com versões antigas do nodeJS e sua veloz compilação, torna ele muito util para a aplicação pois conseguimos integrar ele muito facilmente com Sequelize.
- **Multer** e uma biblioteca utilizada para upload de fotos e arquivos, por método post em forma de Multipart Form ou Formularios. Neste projeto eu utilizei ela para realizar o upload de fotos dos Alunos e realizei desde a criação de seu middleware para obter a imagem e informações via req e támbem configuração do seu modulo. 

## Rotas

- **/users** - com suas respectivas funções de gerenciar usuários ela tem um middleware de depêndencia que se chama loginRequired para login do usuário com permissões especificas. Tais como Update, Delete e Show.
- **/token** - rota com a principal função de gerar token para auteticação do usuario, ela utiliza a biblioteca Json Web Token e recebe as informações de login do usuário a ser logado.
- **/alunos** - Esta rota faz o uso da maioria dos tipos de rotas como GET,PUT,DELETE e POST. Nela efetuamos a criação de Alunos e remoção deles além disto esta rota tem ligação direta com o middleware loginRequired pois apenas usuários logados podem interagir com Alunos. 
- **/foto** - A rota foto e utilizada para realizar o envio de fotos com a biblioteca multer, para receber a foto e tratarmos extensões de arquivos. Além disto nois recebemos pela a foto pela API com o formato Multipart Form. 

## Middlewares
**loginRequired** - e o middleware principal para realizarmos a verificação e obrigatoriedade de login do usuário em nosssa aplicação, nela extraimos o Token JWT da head bearer token e pegamos as informações do respectivo token e utilizamos as informações de forma global na aplicação.

## Relações entre tabelas - Sequelize
Nesta aplicação foi utilizadas as relações entre a tabela de Alunos e fotos com forma da chave estrangeira(foreign key) `aluno_id`, nesta relação o aluno tem várias fotos onde ordenamos elas de forma decresente por id onde a primeira foto e a ultima a ser enviada.

## Models
- **Aluno**, este model e referente a tabela alunos, alem disto o aluno tem relação com a tabela fotos pois o aluno contem foto's,
- **Foto**, este model e referente a tabela fotos, cada foto contem uma chave de identificação estrangeira com o mesmo id do Aluno que ela pertence.
- **User**, este model e referente a tabela users, onde nesta tabela contem todos os usuários da tabela com suas respectivas credenciais de Login(email e senha).

# Comandos 
- Serve para criar uma nova migration, **um schema/Modelo de tabela de forma local**
```bash
npx sequelize migration:create --name=alunos
```

- Executa todas as migrations em SQL, **cria as tabelas respectivas no banco de dados**
```bash
npx sequelize migration:db
```

- Efetua criação da Seeder Para teste no Banco de dados, **cria um template de array de objetos usuários para ser testado no banco de dados.**
```bash
npx sequelize seed:generate --name criar-usuarios
```

- Executa a Seeder referente ao arquivo seeder gerado, **com base no template e tabela predefinida para teste dooo banco ode dados.** 
```bash
npx sequelize db:seed:all
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_HOST`,`DATABASE_PORT`,`DATABASE_USERNAME`,`DATABASE_PASSWORD`,`DATABASE`,
`TOKEN_SECRET`,`TOKEN_EXPIRATION` E `URL_UPLOADS`


## Stack utilizada

**Front-end:** ...

**Back-end:** Node, Express, MariaDB e Sequelize.





