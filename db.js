const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "aviao"
})

connection.connect()

//inserir
function inserir(){
    let sql = "insert into aviao set ?"
    let dados = {nomeaviao:"aomossar",tipo:"prototipo",ano:2023}
    connection.query(sql, dados, function(error, results, fields){
        if(error) throw error
        console.log("Cadastrado!")
    })
    connection.end()
}
inserir()