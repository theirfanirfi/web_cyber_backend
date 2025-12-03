function AuthWare(req, res, next){
    let headers = req.headers
    if(!headers.authtoken){
        res.status(403).json({
            message: "Token not provided"
        })
    }else if (headers.authtoken != "123456789"){
        res.status(403).json({
            message: "Invalid Token provided"
        })
    }else {
        next()
    }
}

module.exports = AuthWare;