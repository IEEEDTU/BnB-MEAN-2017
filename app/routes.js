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
    .get(passport.authenticate('facebook-token'), controller.companyList);;

app.route('/companydetail/:id')
    .get(passport.authenticate('facebook-token'), controller.companyDetails);

app.route('/newslist/')
    .get(passport.authenticate('facebook-token'), controller.newsList);

app.route('/newsdetail/:id')
    .get(passport.authenticate('facebook-token'), controller.newsDetails);

// ============================================================================
// Customer  ===============================================================
// ============================================================================

app.route('/customerdetail/')
    .get(passport.authenticate('facebook-token'), controller.customerDetail);

app.route('/customerlist')
    .get(passport.authenticate('facebook-token'), controller.customerList);

app.route('/buy/:id')
    .post(passport.authenticate('facebook-token'), controller.buy);

app.route('/sell/:id')
    .post(passport.authenticate('facebook-token'), controller.sell);

app.route('/short/:id')
    .post(passport.authenticate('facebook-token'), controller.short);

app.route('/cover/:id')
    .post(passport.authenticate('facebook-token'), controller.cover);

app.route('/takeloan')
    .post(passport.authenticate('facebook-token'), controller.cover);

app.route('/repayloan')
    .post(passport.authenticate('facebook-token'), controller.cover);

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
        else{
                // console.log('no header');
                res.redirect('/');
            }
            
}
