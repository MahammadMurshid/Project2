//console.log('Working')
const express = require('express');
const ConnectMongo = require('./db');
const cors = require('cors');


ConnectMongo();
const app = express();
app.use(express.json());
const port = 9000;
const hostname = '127.0.0.1';
app.use(cors());

app.get('/', (req, res) => {
    res.send('This is / Page ')
    console.log('This is Console.log')
})
app.use('/api/admin', require('./Routes/admin_route'))



app.listen(port, hostname, () => {
    //console.log(`App listening on port https:${hostname}/${port}`)
    //console.log(`App Listening at https://${hostname}:${port}`)
    console.log('App Listening On Port ' + port)
})