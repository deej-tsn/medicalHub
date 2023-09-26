const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();



function generateAccessToken(user : any) {
    const id = user.id;
    const first_name = user.first_name;
    const second_name = user.second_name;
    const lastLogDate = user.lastLogDate;
    let payload = { id : id, first_name : first_name, second_name : second_name, lastLogDate : lastLogDate};
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 * 7});
}

function authenticateToken( req : any, res: any, next : any){
    
    const authHeader = req.headers['auth'];
    const token = authHeader;

    if (token == null) return res.status(401).json({error : 'no user token'});

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
        if (err) return res.status(403).json({error : err.message});
        res.user = user;
        next();
    });
}

export {
    generateAccessToken,
    authenticateToken
}