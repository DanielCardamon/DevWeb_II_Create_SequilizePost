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
app.post("/cadastrar", function (req, res) {
    post.create({
        Nome: req.body.Nome,
        Telefone: req.body.Telefone,
        origemSelect: req.body.origemSelect,
        dateTextInput: req.body.dateTextInput,
        observacao: req.body.observacao

    }).then(function(){
        res.send("Dados enviados com sucesso!")
    }).catch(function(erro){
        res.send("Falha ao cadastrar dados: "+ erro)
    })
})


app.listen(8081, function () {
    console.log("Servidor Ativo na porta 8081")
})