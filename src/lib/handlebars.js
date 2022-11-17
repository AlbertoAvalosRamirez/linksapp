const {format} =  require('timeago.js');//import format method from timeago
const helpers = {};// creating object for views

helpers.timeago = (timestamp) => {
    return format(timestamp);
}; //metodo que recive la fecha ilegible  y la convierte a formato timeago

module.exports = helpers;