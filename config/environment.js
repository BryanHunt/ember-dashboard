module.exports = function(environment) {
  var ENV = {
    rootURL: '/',
    FEATURES: {
      // Here you can enable experimental featuers on an ember canary build
      // e.g. 'with-controller': true
    }
  };

  if (environment === 'development') {
    ENV.rootURL = '/'
  }

  if (environment === 'production') {
    ENV.rootURL = '/ember-dashboard/'
    ENV.location = 'hash';
  }

  return JSON.stringify(ENV); // Set in index.html
};
