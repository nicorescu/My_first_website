var models = require('./server').models;

// var toSave=[
//     {name: 'Nick', email: 'nick@email.com'},
//     {name: 'Someone', email: 'nicksomeone@email.com'},
//     {name: 'Someone else', email: 'nicksomeoneElse@email.com'},
//     {name: 'Someone1', email: 'nicksomeone1@email.com'},
//     {name: 'Someone2', email: 'nicksomeone2@email.com'},
//     {name: 'Someone3', email: 'nicksomeone3@email.com'},
//     {name: 'Someone4', email: 'nicksomeone4@email.com'}
// ];

// toSave.map(obj => {
//     models.Profile.create(obj, (err,created) => {
//         console.log("created?", err,created);
//     })
// })

var filter = {
    where: {           //kind of mySql where clause
        email: {like: 'nick'},
    }, 
    order: 'id ASC', //order by: "field direction"
    limit: 10,
    skip: 0,
    fields: {
        email: true
    }
}

//Profile.Post.Image

models.Profile.findById("5f157cafcb5ca010c87477fd", {include: 'Post'}, (err, found) => {
    console.log("found?", err, found);
    found.Post.destroyAll({date: {lte: new Date('2020-07-21')}})
});