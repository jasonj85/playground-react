var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')

// verbose for long stack traces
var sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database/applications.db');

var app = express();
var server = http.createServer(app);

// register middleware to parse json body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// default
app.get('/', function (req, res) {
    res.send("no get request for this URI");
});

// initialise db
db.run(`CREATE TABLE IF NOT EXISTS applications(
            id INTEGER PRIMARY KEY NOT NULL,
            name NVARCHAR(100)  NOT NULL,
            email NVARCHAR(100)  NOT NULL,
            answer NVARCHAR(100)  NOT NULL
        )`, (err) => {
    if (err) {
        console.log("Could not initialise db applications table");
    }
    // let insert = 'INSERT INTO applications (name, email, answer) VALUES (?,?,?)';
    // db.run(insert, ["Jason James", "jason@email.com", "Magic Beans"]);
    // db.run(insert, ["Tom Smith", "tom@email.com", "A great answer here"]);
    // db.run(insert, ["Bob Jones", "bob@email.com", "Harlem Globetrotters"]);
});

// get application by id
app.get("/applications/:id", (req, res, next) => {
    var params = [req.params.id]
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

// get an individual application
app.put("/applications/:id", (req, res, next) => {
    var reqBody = req.body;
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

server.listen(3000, function () {
    console.log("quiz api is listening on port: 3000");
});
