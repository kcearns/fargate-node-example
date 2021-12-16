const express = require('express')
const { engine } = require('express-handlebars')
const todos = require('./api/Todos')

const app = express()

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index', {
  title: 'To Do App',
  todos
}))

app.use(express.json())
app.use('/api/todos', require('./routes/api/todos'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))