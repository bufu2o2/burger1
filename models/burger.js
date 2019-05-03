module.exports = (sequelize, Dt) => {
    let Bgr = sequelize.define ("Bgr", {
        name: {
            type: Dt.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1,200],
                    msg: "Name must not be blank and less than 200 characters"
                }
            }
        },
        type: { type: Dt.STRING },
        topping: { type: Dt.STRING },
        sauce: { type: Dt.STRING },
        eaten: { 
            type: Dt.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    });
    return Bgr;
}