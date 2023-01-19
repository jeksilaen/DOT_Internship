const loginService = require('../services/loginService')

function get(req, res) {
    return res.render('login')
}
  
function post(req, res, next) {
    try {
        const {token, maxAge} = loginService.login(req.body)
        if (token) {
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
            res.redirect('/')
        }
        else{
            return res.redirect('/login')
        }
        
    } catch (error) {
        console.error('Error while trying to log in user!');
        next(error);
    }
}

module.exports = {
    get,
    post
};