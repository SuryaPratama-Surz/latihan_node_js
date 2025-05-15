// const data ="ALAMAK HOYY ALAMAKKKKK TUNG PERKUNTUNG "
// console .log(data)


const { error } = require ('console');
const express = require('express');
const db = require('./connection');
//import exspress
const app = express()
const port= 5000

//get index
app.get('/', (req, res) => {
    req.status(200)
    res.send("Ini Route Kosong");
});

//get hello
app.get('/ucapan', (req, res) => {
    res.send("Hello World Tahu Bulat Ini Route Hello");
});

app.get('/find', (req, res) => {
    const kategori = req.query.kategori;
    const sql = `SELECT * FROM produk WHERE kategori = '${kategori}'`;
    db.query(
        sql,
        (error, result) => {
        res.json(result);
    });
});


app.get('/user', (req, res) => {
    res.json ({
        nama : "Surya",
        pekerjaan : "Ibadah",
    });
});

app.listen (port, () => {
    // console.log ("App Listening on port 5000")
    console.log(`App listening on port ${port}`)
});