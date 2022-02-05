const express = require('express');
const cors = require('cors');
const routes= require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Anotações de Daniel P. de Oliveira
 * Rota e recurso em app.get('/') 
 * 
 * -------------------------------------
 * 
 * Lembrete para métodos HTTP:
 * 
 * GET: Buscar 
 * POST: Criar
 * PUT: Alterar
 * DELETE: Obviamente deletar ( ͡° ͜ʖ ͡°)
 * 
 * -------------------------------------
 * 
 * Parâmetros:
 * ----------------------------------------------------------------------------------
 * Query: (exemplo: localhost:3333/users?name=Daniel)                               |
 * Parâmetros enviados na rota após interrogação , resumindo, filtros,paginação etc |
 * ----------------------------------------------------------------------------------
 * Route Params: Utilizados para identificar recursos.
 * Request Body: Corpo da requisição p/criar ou alterar recursos.
 * 
 * 
 * Nodemon: Start = npm start
*/

/**
 * Driver: SELECT*FROM users
 * Query Builder: table ('users').select('*').where()
 * 
 * KNEX.JS
 * SQLITE3
 */

app.listen(3333);


