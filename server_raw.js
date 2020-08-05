const http = require("http")

// we can use "req" to get information about the incoming http request
// we can use "res" to set information on the outgoing http response
const server = http.createServer((req, res) => {

  //assume this is sucessful
  res.statusCode = 200

  // tell the client what type of data we're sending back
  res.setHeader("Content-Type", "text/html")

  // send the actual data back
  res.write("<h1>Hello, World!</h1>")

  //Fnalizes the response
  res.end()
})

server.listen(8080, () =>{
  console.log("Server started on port 8080")
})