const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})
module.exports  = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso")
}).catch(function (erro) {
    console.log("Falha ao conectar: " + erro)
})

const Agendamento = sequelize.define("agendamentos", {
    Nome: { type: Sequelize.STRING },
    Telefone: { type: Sequelize.INTEGER },
    origemSelect:   { type: Sequelize.STRING }, 
    dateTextInput: { type: Sequelize.DATE }, 
    observacao: { type: Sequelize.TEXT }
})

//Agendamento.sync({ force: true })
//Agendamento.sync({ })
/*
Agendamento.create({
    Nome: "Joao ???",
    endereco: "Av. Águia de Haia, 2983",
    bairro: "Cidade Antônio",
    cep: 99999999,
    estado: "São Paulo",
    observacao: "teste de aula"
})


Agendamento.create({
    Nome: "Joao 2???",
    endereco: "Av. Águia de Haia, 2983",
    bairro: "Cidade Antônio1",
    cep: 99989999,
    estado: "São Paulo",
    observacao: "teste de aula"
})*/

