const passport = require('passport');

module.exports = app => {
  // Route to start OAuth flow
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  // Redirect Route for Access Token
  app.get('/auth/google/callback', passport.authenticate('google'))
}