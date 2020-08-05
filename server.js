const express = require("express")

//using ./ imports a local file rathe rthan a third-parety dependency
const db = require("./database")

const server = express()

//installing some middleware that hekps us parse json request bodies
server.use(express.json())

server.get("/", (req, res) => {
  res.json({ message: "Hello, World" })
})

server.get("/users", (req, res) => {
  // gets a list of users from a fake db
  const users = db.getUsers()
  res.json(users)
})

server.get("/users/:id", (req, res) => {

  //the param var matches up to the name of the URl param above
  const id = req.params.id

  // get a specific user by thier ID from the "fake" db
  const user = db.getUserById(id)

  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ message: "User not found" })
  }
})

server.post("/users",(req,res) => {
  const newUser = db.createUser({
    name: req.body.name,
  })

  res.status(201).json(newUser)
})

server.delete("/users/:id", (req, res) => {
  const user = db.getUserById(req.params.id)
  if (user) {
  db.deleteUser(req.params.id)

  //since we have nothing to return back to the client, send a 204 with an empty response.
  //204 just means "sucess but we have nothign to return"
  res.status(204).end
  } else {
    res.status(404).json({
      message: "User not found",
    })
  }
})

server.listen(8080, () =>{
  console.log("Server started on port 8080")
})