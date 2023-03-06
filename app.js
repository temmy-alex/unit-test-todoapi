const express = require('express');
const port = 3000
const app = express();
const router = require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/v1', router);

if(process.env.NODE_ENV != "test"){
    app.listen(port, () => {
        console.log(`App listening on http://localhost:${port}`)
    })
}

module.exports = app;