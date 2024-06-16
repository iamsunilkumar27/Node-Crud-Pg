const dbClient = require("../db")
const getStudent = async (req, res) => {
  try {
    await dbClient.connect()
    const resData = await dbClient.query(`SELECT * from student`)
    res.json(resData.rows)
  } catch (error) {
    console.log(error);
  }
}

const postStudent = async (req, res) => {
  try {
    await dbClient.connect()
    const reqData = req.body
    // console.log(reqData);
    const resData = await dbClient.query(`insert  into student (name,email,phone) values ('${reqData['name']}','${reqData['email']}','${reqData['phone']}')`)
    res.json(resData.rows)
  } catch (error) {
    console.log(error);
  }
}

const updateStudent = async (req, res) => {
  try {
    await dbClient.connect()
    const reqData = req.body
    const resData = await dbClient.query(`update student set name = '${reqData['name']}' , email = '${reqData['email']}' , phone = '${reqData['phone']}' where id = '${reqData['id']}'`)
    res.json(reqData)
  } catch (error) {
    console.log(error);
  }
}

const deleteStudent = async (req, res) => {
  try {
    await dbClient.connect()
    const reqData = req.body
    const resData = await dbClient.query(`DELETE FROM student WHERE id='${reqData['id']}'`)
    res.json(reqData)
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getStudent, postStudent, updateStudent, deleteStudent }