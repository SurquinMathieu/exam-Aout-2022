let express = require('express');
let app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.static('public'));

let router = require('./routes');
app.use('/',router);


app.listen(8000,function(){
    console.log('running on port 8000')
});