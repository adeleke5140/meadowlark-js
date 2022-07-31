const express = require("express")
const { engine } = require("express-handlebars")
const getFortune = require("./lib/fortune.js")

const app = express()

const port = process.env.PORT || 4000
//the order of middleware matters

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")

//this middleware affects our views as well
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.render("home")
})

//this below is a wildcard

app.get("/about", (req, res) => {
  res.render("about", { fortune: getFortune() })
})

app.use((req, res) => {
  res.status(404)
  res.render("404")
})

app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.send("500")
})

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port} ` +
      `press Ctrl + c to terminate.`
  )
)
