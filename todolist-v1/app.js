const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

const itens = ["Buy Food", "Cook Food", "Eat Food"]
const workItens = []

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res) {

    const day = date.getDate()

    res.render("list", {
        listTitle: day,
        newListItens: itens
    })
})

app.post("/", function (req, res) {
    const item = req.body.newItem
    if (req.body.list === "Work") {
        workItens.push(item)
        res.redirect("/work")
    } else {
        itens.push(item)
        res.redirect("/")
    }
})

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work List", newListItens: workItens})
})

app.post("/work", function (req, res) {
    let item = req.body.newItem
    workItens.push(item)
    res.redirect("/work")
})

app.get("/about", function (req, res) {
    res.render("about")
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})