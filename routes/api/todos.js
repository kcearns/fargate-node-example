const express = require('express')
const router = express.Router()
const todos = require('../../api/Todos')

router.get('/', (req, res) => res.json(todos))

router.get('/:id', (req, res) => {
  const found = todos.some(todo => todo.id === parseInt(req.params.id))

  if(found) {
    res.json(todos.filter(todo => todo.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `No todo with the id of ${req.params.id}` })
  }
})

module.exports = router