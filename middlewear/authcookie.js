const {validateToken} = require("../utils/authentication.js");

function checkauthCookie(cookie){
    return (req,res,next)=>{

        const cookieToken = req.cookies[cookie];
        if(!cookieToken){ return next();}

        try{
            const userPayload = validateToken(cookieToken);
            req.user = userPayload;
            return next();
            
        }catch(error){}
        
    }
}
 module.exports = checkauthCookie;