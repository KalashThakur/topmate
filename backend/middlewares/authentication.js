var jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = (req, res, next) => {
    if(!req.headers.authorization){
        return res.send("Not authorized")
    }

    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.KEY, function(err, decoded) {
        if(err){
            return res.send("Not authorized");
        }
        else{       
            req.body.email = decoded.email;
            req.body.userId = decoded.userId;
            next()
        }
      });
}

module.exports = authentication
