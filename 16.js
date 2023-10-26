
const moment = require('moment');

function getCurrentDate() {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

const currentDate = getCurrentDate();
console.log(`Текущая дата и время: ${currentDate}`);
