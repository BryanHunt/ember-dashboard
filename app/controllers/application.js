export default Ember.Controller.extend({
  tabsMeta: [
    Ember.Object.create({ title: "Dashboard", linkTo: 'dashboard'}),
    Ember.Object.create({ title: "Model", linkTo: 'model'})
  ]
});