const createToken = require('../utils/createToken');

function login(userData) {
  try {
    if (userData.email === 'admin@gmail.com' && userData.password === 'qwerty') {
      const maxAge = 3 * 24 * 60 * 60;
      const token = createToken('123', maxAge);
      return {token, maxAge}
    }
    return false
    
  } catch (error) {
    console.error(error);
  }
}




module.exports = {
  login
}
