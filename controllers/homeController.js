const {Item, defaultItems} = require('../models/itemModel')
const List = require('../models/listModel')
const _ = require('lodash')

function get(req, res) {
    Item.find((err, docs) => {
        if (err) {
            console.log(err);
        } else {
            if (docs.length === 0) {
                //Inserting default items to DB
                Item.insertMany(defaultItems, (err) => { 
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Successfully saved default items to DB.");
                        res.redirect("/")
                    }
                })
            }
            else{
                res.render("list", {listTitle:"Today", newItems:docs});

            }
        }
    })
}
  
function post(req, res) {
    const itemName = req.body.newItem;
    const listName = req.body.list;
    

    const item = new Item({ 
        name: itemName
    });
    
    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({name: listName}, (err, doc) => {
            doc.items.push(item);
            doc.save();
            res.redirect("/" + listName);
        })
    }
}

function deleteItem(req, res) {
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.deleteOne({_id : checkedItemId}, err => {
            if (err) {
              console.log("Error");
            }
            else{
              console.log("Successfully deleted checked item.");
              res.redirect("/");
            }
        });
    } else {
        List.findOne({name: listName}, function(err,doc){
            doc.items.pull({_id: checkedItemId});
            doc.save();
            res.redirect("/" + listName);
        });
    }
}

function getCustomDir(req, res) {
    const listName = _.capitalize(req.params.dir);

    List.findOne({name: listName}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            if (!doc) {
                //Create a new list
                const list = new List({
                    name: listName,
                    items: defaultItems
                })
            
                list.save();
                res.render("list", {listTitle: listName, newItems: list.items});
            } else{ 
                //Show an existing list
                res.render("list", {listTitle: doc.name, newItems: doc.items});
            }
        }
    })
}
  


module.exports = {
    get,
    post,
    deleteItem,
    getCustomDir
};