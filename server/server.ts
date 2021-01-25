import express = require('express'); 

const app = express();

app.use((req, res, next) => {
    //Allow requests from every origin
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Acess-Control-Allow-Methods', 'OPTIONS, GET, POSt, PUT, DELETE');
    console.log('${req.ip} ${req.method} ${req.url}');
    if (req.method == "OPTIONS") {
        //If the request is for the options available, respond back with a success
        res.sendStatus(200);
    } else 
    {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
;})

app.get('/', (req, res) => {
    res.send([{message: 'hello world'}]);
})

app.listen(4201, '127.0.0.1', function() {
    console.log("server is listening on 4201");
})