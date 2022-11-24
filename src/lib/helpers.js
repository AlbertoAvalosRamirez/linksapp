const bcrypt = require('bcryptjs');

const helpers = {};
//define encrypt password
helpers.encryptPassword = async(password) => {
   const salt = await  bcrypt.genSalt(10); //generate hash
   const hash = await bcrypt.hash(password,salt)
   return hash;
};
//login compare
helpers.matchPassword = async(password,savePassword) => {
    try{
        await bcrypt.compare(password,savePassword);
    }catch(e){
        console.log(e);
    }
    
};

module.exports = helpers;