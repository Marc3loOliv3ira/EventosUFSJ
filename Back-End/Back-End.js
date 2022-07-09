var express = require("express");
var app = express();
var cors = require('cors');
var mysql = require("mysql");
var jwt = require('jsonwebtoken');
var connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "toor",
    database: "eventos"

});
app.use(express.json());
app.use(cors());

//###############################################################  EVENTOS ##################################################################

app.post("/user/auth", (req, resp) => {
    var username = req.body.username;
    var password = req.body.password;

    connection.query("SELECT * FROM user WHERE username = ? and password = ?", [username, password], (err, result) => {
        var usuario = result[0];
        if (result.lenght == 0) {
            resp.status(401);
            resp.send({ token: null, usuario: usuario.username, success: false })
        } else {
            let token = jwt.sign({ id: usuario.username }, 'eventsufsj', { expiresIn: 6000 })
            resp.status(200);
            resp.send({ token: token, usuario: usuario.username, success: true })
        }
    });
});

verifica_token = (req, resp, next) => {
    var token = req.headers['x-access-token'];
    if (!token) {
        return resp.status(401).end();
    } else {
        jwt.verify(token, 'eventsufsj', (err, docoded) => {
            if (err)
                return resp.status(401).end();

            req.usuario = docoded.username;
            next();
        });
    }
}

app.post("/user/signup", (req, resp) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log("POST - Events")
    connection.query("INSERT INTO user(username,password) VALUES(?,?)", [username, password], (err, result) => {
        if (err) {
            console.log(err)
            resp.status(500).end()
        } else {
            resp.status(200);
            resp.json(result)
        }
    });
});





// //################################################################################ PARCERIAS ###################################################################
app.get("/", (req, resp, next) => {
    connection.query("SELECT title FROM events", (error, result) => {
        if (error) {
            console.log(error);
            resp.status(500).send({ error: error });
        } else {
            resp.status(200);
            resp.json(result);

        }
    });
});
app.get("/events", (req, resp, next) => {
    connection.query("SELECT title,id FROM events", (error, result) => {
        if (error) {
            console.log(error);
            resp.status(500).send({ error: error });
        } else {
            resp.status(200);
            resp.json(result);

        }
    });
});


app.post("/events/create", verifica_token, (req, resp) => {
    var title = req.body.title;
    var date = req.body.date;
    var city = req.body.city;
    var description = req.body.description;
    var private = req.body.private;
    console.log("POST - Events")
    connection.query("INSERT INTO events(title,description,city,date,private) VALUES(? ,? ,? ,? ,?)", [title, description, city, date, private], (err, result) => {

        if (err) {
            console.log(err)
            resp.status(500).end()
        } else {
            resp.status(200);
            resp.json(result)
        }
    });
});


app.put("/events/update", verifica_token, (req, resp) => {
    var atitle = req.body.atitle;
    var title = req.body.title;
    var date = req.body.date;
    var city = req.body.city;
    var description = req.body.description;
    var private = req.body.private;


    console.log("PUT - Events");
    connection.query("UPDATE events SET title = ?, description = ?, city = ?, date = ?, private = ? WHERE title = ?", [title, description, city, date, private, atitle], (err, result) => {
        if (err) {
            console.log(err)
            resp.status(500).end()
        } else {
            resp.status(200);
            resp.json(result)
        }
    });

});

app.delete("/events/delete/:id", verifica_token, (req, resp) => {
    var id = req.params.id;
    connection.query("DELETE FROM events WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.log(err)
            resp.status(500).end()
        } else {
            resp.status(200)
            resp.json(result)
        }
    });

});
app.listen(3000, () => {
    console.log('Eventos-UFSJ - Port 3000!');
});