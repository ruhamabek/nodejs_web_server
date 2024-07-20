const {logEvents} = require('./logEvents');


const errorHandler = (res , req , err, next) => {
  logEvents(`${err.name} : ${err.message}` , 'errLog.txt');
  console.error(err.stack);
  res.status(500).send(err.message);
}

module.exports = errorHandler;