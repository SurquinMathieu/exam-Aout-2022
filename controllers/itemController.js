let Item = require('../models/itemModel');
let mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopping',
});

let itemsList = [];

exports.redirectToItemList = function(request,response){
    response.redirect('/itemList')
}

exports.itemList = function(request,response){

    itemsList = [];

    connection.query('SELECT * FROM items',function(error,result){
        if (error){
            console.log(error)
        }
        result.forEach(element => {
        let item = new Item(element.id_items,element.name,element.quantity,element.purchased);
        itemsList.push(item);
        console.log(itemsList)
        })
        response.render('itemList.ejs',{items:itemsList})
    })

    
}

exports.addItemTemplate = function(request,response){
    response.render('addItem.ejs')
}

exports.addItemToList = function(request,response){
    let name = request.body.itemName
    let quantity = request.body.itemQuantity
    let infos_item= {'name': name, 'quantity':quantity}
    connection.query('insert INTO items SET ?',infos_item,function(error,result){
        if (error){
            console.log(error)
        }
    })
    response.redirect('/itemList')
}

exports.removeItem = function(request,response){
    let index = request.params.index;
    console.log(index)

    connection.query("DELETE FROM items WHERE id_items= ?",index,function(err,result){
        if(err) {
            console.log(err);
        }else{    
            response.redirect('/itemList');
        }
    })
}

exports.strikeThrough = function(request,response){
    let index=request.params.index;

    connection.query("UPDATE items SET purchased='1' WHERE id_items= ?",index,function(err,result){
        if(err) {
            console.log(err);
        }else{    
            response.redirect('/itemList');
        }
    })
}