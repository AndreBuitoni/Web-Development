const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let itens = ["Buy Food", "Cook Food", "Eat Food"]
let workItens = []

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res) {

    let today = new Date()
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options)

    res.render("list", {
        listTitle: day,
        newListItens: itens
    })
})

app.post("/", function (req, res) {
    let item = req.body.newItem
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