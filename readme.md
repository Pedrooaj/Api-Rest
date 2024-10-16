
# Api Rest + Sequelize

Este e um projeto onde utilizei uma ORM bem famosa chamada Sequelize juntamento com o banco de dados MariaDB. Neste projeto foi utilizado o conceito de Api Rest juntamente com a biblioteca ExpressJS.

# Conceitos

- **Orientação a Objetos** Neste projeto como principio eu utilizei os conceitos de programação orientada a Objetos com Javascript aplicando eles em meu Express App, Models e Controllers.
- **Sequelize** foi utilizado o sequelize como ORM para realizarmos a modelagem do banco de dados com javascript onde configuei desde o reconhecimento do sequelize na aplicação e suas respectivas rotas de Migration e Configuração, e támbem a conexão do banco de dados até a modelagem das tabelas com migrations e listagem de models juntamente com a conexão do Banco de Dados. 
- **Json Web Token**, utilizado para validação de sessão e sistema de login com usuários, por conta de sua leveza e támbem segurança do JWT. Foram Utilizados conceitos desde a geração de tokens apenas com a verificação e validade dos dados com o banco de dados como email e senha, além de armazenar e disponibilizar dados de identificação como Id, Email e permissões com base na verificação e validação do Token.


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


## Stack utilizada

**Front-end:** ...

**Back-end:** Node, Express, MariaDB e Sequelize.

