var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: ENV.location
});

Router.map(function() {
  this.resource('dashboard');
  this.resource('model');
});

export default Router;
