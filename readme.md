
# Api Rest + Sequelize

Este e um projeto onde utilizei uma ORM bem famosa chamada Sequelize juntamento com o banco de dados MariaDB. Neste projeto foi utilizado o conceito de Api Rest juntamente com a biblioteca ExpressJS.

# Conceitos

- **Orientação a Objetos** Neste projeto como principio eu utilizei os conceitos de programação orientada a Objetos com Javascript aplicando eles em meu Express App, Models e Controllers.
- **Sequelize** foi utilizado o sequelize como ORM para realizarmos a modelagem do banco de dados com javascript onde configuei desde o reconhecimento do sequelize na aplicação e suas respectivas rotas de Migration e Configuração, e támbem a conexão do banco de dados até a modelagem das tabelas com migrations e listagem de models juntamente com a conexão do Banco de Dados. 


# Comandos 
- Serve para criar uma nova migration, **um schema/Modelo de tabela de forma local**
```bash
npx sequelize migration:create --name=alunos
```

- Executa todas as migrations em SQL, **cria as tabelas respectivas no banco de dados**
```bash
npx sequelize migration:db
```