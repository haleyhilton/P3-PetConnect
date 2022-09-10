// import { format } from 'date-fns'
const { format } = require('date-fns');


function formatDate(itsadate) {
    return format(itsadate, 'mm/dd/yyyy')
}
console.log(formatDate(1111111111111111));

module.exports = formatDate