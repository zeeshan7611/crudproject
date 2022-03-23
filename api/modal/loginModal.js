const pool = require("../../config/db");

module.exports = {
  loggedin: (auth, callback) => {
    pool.query(
      `select * from demodb.user where userName = ? and password = ?`,
      [auth.userName, auth.password],
      (error, results, feilds) => {
        if (error) {
          return callback(error);
        } else {
          return callback(null, results);
        }
      }
    );
  },
  sessionToken: (data, callback) => {
    pool.query(
      `Insert into demodb.session(id, token) values( ?,?)`,
      [data.id, data.token],
      (error, results, feilds) => {
        if (error) {
          return callback(error);
        } else {
          return callback(null, data);
        }
      }
    );
  },
  home: (data, callback) => {
    pool.query(
      `select userName,qualification,city,phone from demodb.user`,
      [],
      (error, results, feilds) => {
        if (error) {
          return callback(error);
        } else {
          return callback(null, results);
        }
      }
    );
  },
  updateData: (data, callback) => {
      pool.query(
          `update demodb.user set username = ? , password = ? , qualification = ? ,city = ?,phone = ? `,

          [
              data.userName,
              data.password,
              data.qualification,
              data.city,
              data.phone
        ],
        (error, results, feilds) => {
            if(error) {
                return callback(error);
            }
            else{
                return callback(null, data)
            }
        }
      )
  }
};
