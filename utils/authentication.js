const jwt = require("jsonwebtoken");
const SECRET = "fuckyou123";

function logintokenCreator(user){

    const payload={

        _id : user._id,
        email:user.email,
        Name : user.fName,
        role : user.role,
    }

    const token = jwt.sign(payload,SECRET);
    return token;

}

function validateToken(token){

    const payload = jwt.verify(token,SECRET);
    return payload;

}

module.exports={logintokenCreator,validateToken};