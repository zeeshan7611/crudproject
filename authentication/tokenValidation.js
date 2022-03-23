const jwt = require("jsonwebtoken");

module.exports = {
    checkToken:(req, res, next) => {
        let token = req.get.query;
        if(token) {
            token = token.slice(7);
            jwt.verify(token, "qwe123", (err, decoded) => { 
                if(err) {
                    return res.json({
                        status: "failure",
                        Response: 500,
                        meesage: "Invalid Token"
                    })
                    }
                    else{
                        req.decoded = decoded;
                        next();
                    }
                })
            }else{
            return res.json({
                status: "failure",
                message: "Access Denied Unauthorized user"
            })
        }
    }
}