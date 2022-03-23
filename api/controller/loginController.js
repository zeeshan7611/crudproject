const { loggedin, sessionToken, home, updateData } = require("../modal/loginModal");
const { sign } = require("jsonwebtoken");
const res = require("express/lib/response");

module.exports = {
  login: (req, res) => {
    const body = req.body;
    console.log(body);
    loggedin(body, (err, results) => {
      if (results.length > 0) {
        results[0].password = undefined;
        const jsontoken = sign({ result: results }, "qwe123", {
          expiresIn: "15m",
        });
        console.log(results);
        var session = {};
        session.id = results[0].id;
        session.token = jsontoken;
        sessionToken(session, (err, data) => {
          console.log(err);
          console.log(data);
          if (!data) {
            return res.json({
              Response: 500,
              status: "Failure",
              meesage: "Something went wrong",
            });
          } else {
            return res.json({
              Response: 200,
              status: "Succes",
              message: "Login Sucessfull",
              data: data,
            });
          }
        });
      } else {
        return res.json({
          Response: 404,
          status: "failure",
          message: "Invalid  user",
        });
      }
    });
},
  home: (req, res) => {
      home((err, results) => {
        if (err) {
          return res.json({
            status: "Failure",
            Response: "500",
          });
        } else {
          return res.json({
            status: "succes",
            Response: 200,
            data: results,
          });
        }
      });
  },
  update: (req, res) => {
      const body = req.body;
      updateData(body, (err, results) => {
          if(err) {
              return res.json({
                  status: "failure",
                  Response: 500
              })
          }
          else{
              return res.json({
                  status: "Success",
                  Response: 200,
                  meesage: "Update succesful",
                  data: results
              })
          }
      })
  }
};
