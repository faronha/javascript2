const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const porta = 3000;

const banco = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '130304',
  database: 'sistema_login'
});

banco.connect(erro => {
  if (erro) {
    console.error("Erro ao conectar no MySQL:", erro);
    return;
  }
  console.log("Conectado ao MySQL");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({
  secret: 'segredo',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post('/cadastro', async (req, res) => {
  const { nome, senha } = req.body;
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  banco.query(
    "INSERT INTO usuario (nome, senha) VALUES (?, ?)",
    [nome, senhaCriptografada],
    (erro, resultado) => {
      if (erro) {
        console.error("Erro ao registrar o usuário:", erro);
        return res.status(500).send("Erro ao cadastrar usuário");
      }
      res.redirect('/login');
    }
  );
});

app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  banco.query(
    "SELECT * FROM usuario WHERE nome = ?",
    [nome],
    async (erro, resultado) => {
      if (erro) {
        console.error("Erro ao fazer login:", erro);
        return res.status(500).send("Erro ao fazer login");
      }

      if (resultado.length === 0) {
        return res.status(401).send("Usuário não encontrado");
      }

      const usuario = resultado[0];
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (senhaValida) {
        req.session.logado = true;
        req.session.nome = nome;
        return res.redirect("/painel");
      } else {
        return res.status(401).send("Senha incorreta");
      }
    }
  );
});

app.get('/painel', (req, res) => {
  if (req.session.logado) {
    res.sendFile(path.join(__dirname, "public", "painel.html"));
  } else {
    res.redirect("/login");
  }
});

app.get('/sair', (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
