//DB CONNECTION 
const mysql = require('mysql');
const {promisify} = require('util');//convert callbacks into promises code
const {database}  = require('./keys');

const pool = mysql.createPool(database); /*A pool is a place where connections get stored. When you 
request a connection from a pool, you will receive a connection that is not currently being used, or a new connection.*/
pool.getConnection((err,connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION OFF');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('MANY DB CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.err('CONNECTION REFUSED');
        }
        
    }
    if(connection)connection.release;
    console.log('DB CONNECTED');
    return;
});
pool.query = promisify(pool.query);
module.exports = pool;
