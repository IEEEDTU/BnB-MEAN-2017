module.exports = function(app, passport) {
var controller = require('./controller.js')

// normal routes ===============================================================

    // show the home page (will also have our login links)
    
    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        // console.log(req.user)
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });






// ============================================================================
// Stock Market ===============================================================
// ============================================================================

app.route('/companylist')
    .get(isLoggedIn, controller.companyList)

app.route('/companydetail/:id')
    .get(isLoggedIn, controller.companyDetails)

app.route('/newslist/')
    .get(isLoggedIn, controller.newsList)

app.route('/newsdetail/:id')
    .get(isLoggedIn, controller.newsDetails)

// ============================================================================
// Customer  ===============================================================
// ============================================================================

app.route('/customerdetail/')
    .get(isLoggedIn, controller.customerDetail)

app.route('/customerlist')
    .get(isLoggedIn, controller.customerList)





// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));
// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));
// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });
};
// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else if(req.headers.authorization){
                var header = req.headers.authorization;
                console.log('header ' + header );
                var customer = require('./models/Customer');
                customer.findOne({'facebook.token' : header}, function(err,cust){
                if (err){
                    console.log(err);
                    res.redirect('/');
                }
                // console.log(cust);
                return next();
            })
                return next();
            }else{
                console.log('no header');
                res.redirect('/');
            }
            
}
