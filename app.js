// Import
const express = require("express");
const bodyParser = require("body-parser")


const app = express();
const port = 4000
const signUpRoutes = require("./api/routes/signupRoutes");
const loginRoutes = require("./api/routes/loginRoutes");

app.use(express.json());
app.use(bodyParser.json())
app.use("/api", signUpRoutes);
app.use("/api", loginRoutes)




//listen on port 4000
app.listen(port, () => {
    console.log(`server is connected ${port}`)
} )
