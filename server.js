//port, views and app.(get/listen etc)

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var db = require('./db')

var app = express()

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

var PORT = 3000

app.listen(PORT, function() {
    console.log('listening on port', PORT)
})


app.get('/', function (req,res) {

})


app.get('/output', function(req, res) {
  db.getWombles()
  .then(function (data) {
    var vm = {
      wombles:wombles
    }
    console.log(vm)
    res.render('views', vm)
  })
  .catch(function(err) {
      console.error(err.message)
      res.status(500).send("error message")
  })
})






// app.get('/', function (req, res) {
//   res.send('WOMBLES!')
// })


//joining characteristics_id and wombles_id

// app.get('/view', knex('wombles')
//   .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
//   .select('wombles.name', 'characteristics.description as description')
//   .then(function (data) {
//     res.render(data)
//   })
// )
//








//
// //US - join from rubiish id
//
// knex('wombles')
//   .join('rubbish', 'wombles.id', '=', 'rubbish.id')
//   .select('wombles.name', 'rubbish.name as rubbish')
//   .then(function (data) {
//   .catch(displayError)
//   })
//
//
// //US - inse new womble
//
// knex.insert({
//   name: 'Daisy',
//   characteristic_id: 4
// })
// .into('wombles')
// .then(knex.destroy)
// .catch(displayError)
//
//
// //delete a womble
//
// knex.del ({
//   characteristic_id:2
// })
//
// knex('wombles')
// .where('characteristic_id', '=', '2')
// .del()
// .then(knex.destroy)
// .catch(displayError)
//
//
// //update a womble characteristic
//
// knex('wombles')
// .where('characteristic_id', '=', '4')
// .update({
//   characteristic_id: '5'
// })
// .then(knex.destroy)
// .catch(displayError)
