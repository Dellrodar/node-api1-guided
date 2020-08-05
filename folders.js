// another way to "import" a dependency
const fs = require("fs")

// creates a new folder called data
fs.mkdirSync("data")

// run a CB function for each letter of the alphabet
"abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => {
  fs.mkdirSync(`data/${letter}`)
})