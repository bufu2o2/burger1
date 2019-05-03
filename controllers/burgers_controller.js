const express = require("express");
const router = express.Router();
const bgr = require("../models/burger.js");
const cl = (m) => { console.log(m);}

router.get("/", (req,res) => {
    bgr.all((d) => {
        cl(d);
        res.render('index', {burgers: d});
    });
});

router.post("/api/burgers", (req, res) => {
    let b = req.body;
    bgr.add(["name", "type", "topping", "sauce"], [b.name, b.type, b.topping, b.sauce], (r) => {
        res.json({ id: r.insertID });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let c = "id = " + req.params.id;
    bgr.up("eaten=true", c, (r) => {
        if(r.changedRows === 0) {
            return res.statusCode(404).end();
        }
            res.status(200).end();
    });
});

module.exports = router;