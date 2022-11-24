//ruta  para almacenar la autenticación del usuario
const express  = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/signup',(req,res)=>{
    res.render('/home/albert/Desktop/linksapp/src/views/auth/signup.hbs')
});


router.post('/signup', 
    passport.authenticate('local.signup',{
    successRedirect : '/profile',
    failureRedirect : '/signup'
}));

router.get('/profile', (req,res)=>{
    res.send('Profile')
})
module.exports = router;