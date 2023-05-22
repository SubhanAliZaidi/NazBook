const jwt = require('jsonwebtoken');

const secretSignature = 'NaziyaParveen';

const fetchuser = (req, res, next) => {
  //Get the user from the jwt token and add it to req object
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({error: "Please authenticate using a valid token"});
  }
  
  try {
    const data = jwt.verify(token, secretSignature); 
    req.user = data.user;
    next();
  }

  catch {
    res.status(401).json({error: "Please authenticate using a valid token"});
  }
}

module.exports = fetchuser;