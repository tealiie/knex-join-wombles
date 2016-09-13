//function to export what I want do eg.

var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getWombles: getWombles
}

function getWombles() {
  return knex('wombles').select()
  .catch(function (error) {
    console.log('error returned', error)
  })
}
