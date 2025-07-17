const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('../models')
// create app
const PORT = 8080

// Router
const taskRouter = require('./routes/tasks')
app.use("/tasks", taskRouter)

db.sequelize.sync().then(() => {
    //start the server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      })
})
  

  