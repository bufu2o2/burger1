const mysql  = require("mysql");
let con;

if(process.env.JAWSDB_URL) {
    con = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "123456789",
        database: "burgers_db"
    });
}


con.connect((e) => {
    if(e) {
        console.error("error connecting: " + e.stack);
        return;
    }
    console.log("connected as id " + con.threadId);
});

module.exports = con;