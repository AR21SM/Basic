const jwt=require("jsonwebtoken")

const {JWT_SECRET} =require("../config")
function adminMiddleware(req, res, next) {
   
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedvalue=jwt.verify(jwtToken,JWT_SECRET);
    try{
        if(decodedvalue.username){
            next();
        }
        else{
            res.status(403).json({
                msg:"You are not Authorized user"
            })
        }

    }
    
    catch(e){
        res.status(403).json({
            msg:"Invalid Inputs"
        })
       
    }
    

}

module.exports = adminMiddleware;