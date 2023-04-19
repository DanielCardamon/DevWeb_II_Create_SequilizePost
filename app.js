const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", function (req, res) {
    res.render("cadastro")
})
app.get("/consulta", function (req, res) {
    post.findAll().then(function (post) {
        res.render("consulta", {post})
        console.log(post)
    }).catch(function (erro) {
        res.send("Falha ao carregar dados: " + erro)
    })

})

app.post("/cadastrar", function (req, res) {
    post.create({
        Nome: req.body.Nome,
        Telefone: req.body.Telefone,
        origemSelect: req.body.origemSelect,
        dateTextInput: req.body.dateTextInput,
        observacao: req.body.observacao

    }).then(function () {
        res.redirect("/")
    }).catch(function (erro) {
        res.send("Falha ao cadastrar dados: " + erro)
    })
})
app.get("/excluir/:id", function (req, res) {
    post.destroy({
        where: {
            id: req.params.id
          },
          force: true

    }).then(function () {
        res.redirect("/consulta")
    }).catch(function (erro) {
        res.send("Falha ao cadastrar dados: " + erro)
    })
})

app.listen(8081, function () {
    console.log("Servidor Ativo na porta 8081")
})