var express = require('express');
var cors = require('cors');
var http = require('http');
var bodyParser = require('body-parser')

// verbose for long stack traces
var sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database/sqlite.db');

var app = express();
var server = http.createServer(app);

// middleware start
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// middleware end

// default
app.get('/', function (req, res) {
    res.send("no get request for this URI");
});

// initialise dbs
db.run(`CREATE TABLE IF NOT EXISTS applications(
            id INTEGER PRIMARY KEY NOT NULL,
            name NVARCHAR(100)  NOT NULL,
            email NVARCHAR(100)  NOT NULL,
            answer NVARCHAR(100)  NOT NULL
        )`, (err) => {
    if (err) {
        console.log("Could not initialise db applications table");
    }

    // let insertApps = 'INSERT INTO applications (name, email, answer) VALUES (?,?,?)';
    // db.run(insertApps, ["Jason James", "jason@email.com", "Magic Beans"]);
    // db.run(insertApps, ["Tom Smith", "tom@email.com", "A great answer here"]);
    // db.run(insertApps, ["Bob Jones", "bob@email.com", "Harlem Globetrotters"]);
});

db.run(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY NOT NULL,
    username NVARCHAR(100)  NOT NULL,
    email NVARCHAR(100)  NOT NULL,
    password TEXT NOT Null
)`, (err) => {
    if (err) {
        console.log("Could not initialise db users table");
    }

    // let insertUser = 'INSERT INTO users (username, email, password) VALUES (?,?)';
    // db.run(insertUser, ["jason", "jason@email.com", "password123"]);
});

// get application by id
app.get("/applications/:id", (req, res, next) => {
    db.get("SELECT * FROM applications where id = ?", [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});

// get all applications
app.get("/applications", (req, res, next) => {
    db.all("SELECT * FROM applications", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    });
});

// add a new application
app.post("/applications/", (req, res, next) => {
    db.run("INSERT INTO applications (name, email, answer) VALUES (?,?,?)",
        [req.body.name, req.body.email, req.body.answer],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "application_id": this.lastID
            })
        });
});

// update an individual application
app.put("/applications/:id", (req, res, next) => {
    db.run(`UPDATE applications set name = ?, email = ?, answer = ? WHERE id = ?`,
        [req.body.name, req.body.email, req.body.answer, req.params.id],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ updatedID: req.params.id });
        });
});

// delete an application
app.delete("/applications/:id", (req, res, next) => {
    db.run(`DELETE FROM applications WHERE id = ?`, req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(200).json({ deletedID: req.params.id })
        });
});

// register user
app.post("/register/", (req, res, next) => {
    db.run("INSERT INTO users (username, email, password) VALUES (?,?,?)",
        [req.body.username, req.body.email, req.body.password],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "user_registered": this.lastID
            })
        });
});

// login user
app.post("/login/", (req, res, next) => {
    db.get("SELECT * FROM users where username = ? AND password = ?", [req.body.username, req.body.password], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});

// get user applications
app.post("/applicant/", (req, res, next) => {
    db.all("SELECT * FROM applications where email = ?", [req.body.email], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(rows);
    });
});

server.listen(3001, function () {
    console.log("quiz api is listening on port: 3001");
});
