const route = require('express').Router();
const controller = require('../controllers/todo');

route.get('/', controller.listTodo);

module.exports = route;