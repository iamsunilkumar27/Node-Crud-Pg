const express = require("express")
const client = require('./db');
const { getStudent, postStudent, updateStudent, deleteStudent } = require("./controllers/sudent");

const app = new express()
const port = 4000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/students', getStudent)
app.post('/student', postStudent)
app.put('/student', updateStudent)
app.delete('/student', deleteStudent)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})