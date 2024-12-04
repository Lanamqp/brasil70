const { Client } = require('pg');

const client = new Client({
  user: 'postgres',  // Substitua pelo seu usuário PostgreSQL
  host: 'localhost',
  database: 'brasil70',  // Substitua pelo nome do banco de dados
  password: '123456',  // Substitua pela sua senha
  port: 5432,  // Porta padrão do PostgreSQL
});

client.connect()
  .then(() => console.log('Conexão com o PostgreSQL estabelecida com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao PostgreSQL:', err))
  .finally(() => client.end());
