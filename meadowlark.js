const express = require("express")
const { engine } = require("express-handlebars")
const handlers = require("./lib/handlers")

const app = express()

const port = process.env.PORT || 4000
//the order of middleware matters

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")

//this middleware affects our views as well
app.use(express.static(__dirname + "/public"))

app.get("/", handlers.home)

//this below is a wildcard

app.get("/about", handlers.about)

//custom 404 page
app.use(handlers.notFound)

app.use(handlers.serverError)

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port} ` +
      `press Ctrl + c to terminate.`
  )
)
