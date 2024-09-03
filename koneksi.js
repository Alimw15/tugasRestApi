import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "perpus_jaya"
})

export default db;