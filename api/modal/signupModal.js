const pool = require("../../config/db.js");

module.exports = {
    addData: (data, callback) => {
        pool.query(
            `INSERT INTO demodb.user(userName,password,qualification,city,phone)
            values(?,?,?,?,?)`,
            [data.userName,
            data.password,
            data.qualification,
            data.city,
            data.phone
        ],
        (error, results, feilds) => {
            if(error){
                return callback(error);
            }
            else{
                return callback(null, data);
            }
        }
        );
    },
    getData: (callback) => {
        pool.query(`select * from user`,
        [],
        (error, results, feilds) => {
            if(error) {
                return callback(error);
            }
            else {
                return callback(null, results)
            }
        });
    }
}