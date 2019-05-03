const db = require("../models");
const cl = (m) => { console.log(m);}


module.exports = (app) => {
    app.get("/", (req,res) => {
        db.Bgr.findAll({}).then((r) => res.render('index', {burgers: r}));
        });
    
    app.post("/api/burgers", (req, res) => {
        let b = req.body;
        db.Bgr.create({
            name: b.text,
            type: b.type,
            topping: b.topping,
            sauce: b.sauce
        });
        res.status(204).end();
    });
    
    app.put("/api/burgers/:id", (req, res) => {
        let i = req.params.id;
        db.Bgr.update({ eaten: true },
            {where: { id: i }}
        );
        res.status(204).end();
    });
}