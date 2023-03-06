class TodoController {
    static listTodo(req, res, next) {
        const todoList = {data: [{title: "Todo 1"}, {title: "Todo 2"}], message: 'Success'}
        res.status(200).json(todoList)
    }
}

module.exports = TodoController;