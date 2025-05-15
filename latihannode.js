
const express = require('express');
const { query } = require('./connection');
const app = express()
const port= 8230

app.get('/', (req, res) => {
    res.send("Ini Route Kosong");
});

//get hello
app.get('/ucapan', (req, res) => {
    res.send("Selamat Siang dari server");
});

app.get('/data-diri', (req, res) => {
    res.json ({
        nama : "Surya",
        usia : "17 Tahun",
        kota : "Bandung",
    });
});

app.get('/salam', (req, res) => {
     
    const data = req.query.data;
    const nama = `Hai ${data} selamat datang`

    if (data) {
        res.send(nama)
    } else {
        res.send("Hai Siapa Kamu?")
    }    
});





app.listen (port, () => {
    // console.log ("App Listening on port 5000")
    console.log(`App terhubung ke port ${port}`)
});