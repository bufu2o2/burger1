const con = require("../config/connection.js");
const th = (e) => { if(e){throw e;}}
const cl = (m) => { console.log(m);}

let printq = (x) => {
    let a = [];

    for(let i=0; i<x;i++){
        a.push("?");
    }
    return a.toString();
}

let format = (x) => {
    let f = x[0] + '=' + x[1];
    return f;
}

const orm = {
    all: (tbl, cb) => {
        let q = "SELECT * FROM ??";
        con.query(q, [tbl], (e,r) => {
            th(e);
            cb(r);
        });
    },
    add: (tbl, cols, vals, cb) => {
        let q = "INSERT INTO " + tbl;
        q += "( ";
        q += cols.toString();
        q += ") VALUES (";
        q += printq(vals.length);
        q += ") ";
        
        con.query(q, vals, (e,r) => {
            th(e);
            cb(r);
        });
    },
    oneUP: (tbl, col, cond, cb) => {
        let q = "UPDATE " + tbl + " SET ";
        q += col;
        q += " WHERE ";
        q += cond;

        con.query(q, (e,r) => {
            th(e);
            cb(r);
        })
    }
}

module.exports = orm;