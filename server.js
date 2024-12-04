const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Permitir requisições de qualquer origem
app.use(cors());

// Configuração do banco de dados
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'brasil70',
    password: '123456',
    port: 5432,
});

client.connect();

// Middleware para analisar o corpo das requisições
app.use(express.json());

// Rota para cadastro de usuário
app.post('/cadastro', async (req, res) => {
    const { email, nome, senha } = req.body;

    if (!email || !nome || !senha) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    try {
        // Verificar se o email já existe
        const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = $1';
        const result = await client.query(checkEmailQuery, [email]);

        if (result.rows.length > 0) {
            return res.status(400).send('Este email já está cadastrado');
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Inserir o novo usuário no banco de dados
        const insertQuery = 'INSERT INTO usuarios (email, nome, senha) VALUES ($1, $2, $3)';
        await client.query(insertQuery, [email, nome, hashedPassword]);

        res.status(201).send('Cadastro realizado com sucesso');
    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

// Rota de login
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).send('Email e senha são obrigatórios');
    }

    try {
        // Verificar se o email existe
        const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = $1';
        const result = await client.query(checkEmailQuery, [email]);

        if (result.rows.length === 0) {
            return res.status(400).send('Usuário não encontrado');
        }

        const usuario = result.rows[0];

        // Verificar se a senha está correta
        const isPasswordValid = await bcrypt.compare(senha, usuario.senha);

        if (!isPasswordValid) {
            return res.status(400).send('Senha incorreta');
        }

        // Gerar um token JWT
        const token = jwt.sign({ userId: usuario.id }, 'secreta_chave', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (err) {
        console.error('Erro ao fazer login:', err);
        res.status(500).send('Erro ao fazer login');
    }
});

// Rota para lidar com o feedback (ainda existente no código)
app.post('/feedback', async (req, res) => {
    const { nome, comentario } = req.body;

    if (!nome || !comentario) {
        return res.status(400).send('Nome e comentário são obrigatórios');
    }

    try {
        const query = 'INSERT INTO feedbacks (nome, comentario) VALUES ($1, $2)';
        await client.query(query, [nome, comentario]);
        res.status(200).send('Feedback enviado com sucesso!');
    } catch (err) {
        console.error('Erro ao inserir feedback:', err);
        res.status(500).send('Erro ao enviar o feedback');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


