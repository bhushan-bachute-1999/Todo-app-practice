const express = require('express');//Inlcude the express module
const port = 8000;//Declare the port

const app = express();//Define express app

//Middelware



//Listen on port 8000
app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server", err);
        return;
    }
    console.log(`Express app is up and running on port ${port}`);
});

