const {validateToken} = require("../utils/authentication.js");

function checkauthCookie(cookie){
    return (req,res,next)=>{

        const cookieToken = req.cookies[cookie];
        if(!cookieToken){next();}

        try{
            const userPayload = validateToken(cookieToken);
            req.user = userPayload;
            
        }catch(error){
            next();
        }
    }
}
 module.exports = checkauthCookie;