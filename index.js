// const data ="ALAMAK HOYY ALAMAKKKKK TUNG PERKUNTUNG "
// console .log(data)

// express utama
const express = require('express');
const app = express()
const { error } = require ('console');
const db = require('./connection');
const bodyParser = require ('body-parser');
app.use(bodyParser.json())

//port
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


app.get('/find/:id', (req, res) => {
    const params = req.params.id;
    const sql = `SELECT * FROM produk WHERE id_produk = '${params}'`;
    db.query(sql,
         (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(result);
    });
});




app.get('/user', (req, res) => {
    res.json ({
        nama : "Surya",
        pekerjaan : "Ibadah",
    });
});




//post add data
app.post('/add-produk' , (req, res) => {
 
    //const id_produk = req.body.id_produk
    //const produk = req.body.produk

    const { id_produk, produk, kategori, harga_per_kg } = req.body;
    const sql = ` INSERT INTO produk  ( id_produk, produk, kategori, harga_per_kg) VALUES (
     ${id_produk} , "${produk}" , "${kategori}" , ${harga_per_kg}
    )`;

    db.query(sql, (error , result) => {
        if (error) throw error ;
        //console.Log.(result)
    
    });

    return res.status(200). send ("Mantap si eta")

});


//update data

app.put('/update-produk/:id', (req, res) => {
    const id_produk = req.params.id;
    const { produk, kategori, harga_per_kg } = req.body;
    const sql = `UPDATE produk SET produk = "${produk}", kategori = "${kategori}", harga_per_kg = ${harga_per_kg} 
    WHERE id_produk = ${id_produk}`;

    db.query(sql, (error, result) => {
        if (error) throw error;
     
    });

       res.status(200).send("Data berhasil diupdate");

});

//delete

app.delete('/delete/:id', (req, res) => {
    const id_produk = req.params.id;
    const sql = `DELETE FROM produk where id_produk = '${id_produk}'`;

    db.query(sql, (error, result) => {
        if (error) throw error;  
    });
       res.status(200).send("Data berhasil Didelete");
});




app.listen (port, () => {
    // console.log ("App Listening on port 5000")
    console.log(`App listening on port ${port}`)
});