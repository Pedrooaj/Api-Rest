- Serve para criar uma nova migration um schema de tabela
```bash
npx sequelize migration:create --name=alunos
```

- Serve para enviar para o banco de dados o schema e executar em SQL
```bash
npx sequelize migration:db
```