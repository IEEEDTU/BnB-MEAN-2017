// config/auth.js
var configDB = require('../config/database.js');
var cbUrl = 'http://localhost:3000/auth/facebook/callback';
if (configDB.url === 'mongodb://localhost:27017/bnb2018'){
    cbUrl = 'http://localhost:3000/auth/facebook/callback';
} else if (configDB.url === 'mongodb://nikhil:hostel59@ds155841.mlab.com:55841/bnb'){
    cbUrl = 'https://bnb-2018.herokuapp.com/auth/facebook/callback'
}


// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '114706539031197', // your App ID
        'clientSecret'    : '8d20971b0312ff3e117c8ebf93cbd9c6', // your App Secret
        'callbackURL'     : cbUrl,
        'profileFields'   : ['id', 'displayName', 'name', 'gender' , 'email'],
        'enableProof'     : true
    }

};
