USE oakvm8l16xv3dcnv;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(30) NOT NULL,
    topping VARCHAR(30) NOT NULL,
    sauce VARCHAR(30) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);



INSERT INTO burgers (name, type, topping, sauce) VALUES ('bob', 'salmon', 'lettuce', 'mayo');
INSERT INTO burgers (name, type, topping, sauce, eaten) VALUES ('jimmy', 'impossible', 'cheese', 'ketchup', true);