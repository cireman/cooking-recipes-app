//? Dependencies
const express = require('express')
const cors = reqiore('cors')
const db = require('./utils/database')


//? Files
const {port} = require('./config')

//* Routes
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const categoryRouter = require('./categories/categories.routes')
const recipesRouter = require('./recipes/recipes.routes')
const ingredientsRouter = require('./ingredients/ingredients.routes')


const initModels = require('./models/initModels')


//? Initial configs
const app = express()

app.use(express.json())
// const corsConf = {

// }
app.use(cors())


db.authenticate()
  .then(() => {
    console.log('Database Authenticated')
  })
  .catch(err => {
    console.log(err)
  })

db.sync()
  .then(() => {
    console.log('Database Synced')
  })
  .catch(err => {
    console.log(err)
  })

initModels()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'OK!',
    users: `localhost: ${port}/api/v1/users`
  })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter) 
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/recipes', recipesRouter)
app.use('/api/vi/ingredients', ingredientsRouter)

/*
*app.post('/hola', async (req, res) => {
*  try {
*    const data = await Users.findAll()
*    res.status(200).json((data))
*  } catch(error) {
*    res.status(400).json(error)
*  }
*})
*/
app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})