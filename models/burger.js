const orm = require("../config/orm.js");

const bgr = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    add: (cols, vals, cb) => {
        orm.add("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    up: (colval, con, cb) => {
        orm.oneUP("burgers", colval, con, (res) => {
            cb(res);
        });
    }
}

module.exports = bgr;