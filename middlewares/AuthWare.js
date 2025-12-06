function AuthWare(req, res, next){
    let headers = req.headers
    if(!headers.authtoken){
        res.json({
            "message": "Token not provided"
        })
    }else if(headers.authtoken != "123456789"){
        res.json({
            "message": "Invalid token provided"
        })
    }else {
        next()
    }
}

module.exports = AuthWare;