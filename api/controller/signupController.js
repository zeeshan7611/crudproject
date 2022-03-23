const {
    addData,
    getData
} = require("../modal/signupModal");

module.exports = {
    signUp: (req, res) => {
        var body = req.body;
        console.log(body)
        addData(body, (err, results) => {
            if(err){
                console.log(err)
                return res.status(500).json({
                    status: "failure",
                    Response: 500,
                    meesage: "Database Connection erro"
                })

            }
            else{
                return res.status(200).json({
                    status: "success",
                    Response: 200,
                    data: results,
                    message: "Signup Succesfull"
                })
            };
        })
    },
    getdata: (req,res) => {
        getData((err, results) => {
            if(err){
                return res.json({
                    status: "Failure",
                    Response: "500"
                })

            }
            else{
                return res.json({
                    status: "succes",
                    Response: 200,
                    data: results,
                });
            };
        })
    }
};