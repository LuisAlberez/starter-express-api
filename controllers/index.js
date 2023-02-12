const connection = require('../db')
require('dotenv').config()
async function findUser(name, dni) {
     
     return new Promise((resolve, reject) => {

      if (dni && !name) {
          connection.query(`SELECT * FROM ${process.env.TABLA}  WHERE dni= ?`, [dni], function (error, results, fields) {
            if (error) return reject(error);
            return resolve(results[0]);
          });
      }
      if (!dni && name) {
          connection.query(`SELECT * FROM ${process.env.TABLA} WHERE nombres= ?`, [name], function (error, results, fields) {
            if (error) return reject(error);
            return resolve(results[0]);
          });
      }
    });
}

module.exports=findUser