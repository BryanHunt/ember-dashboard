export default Ember.Component.extend({
  layoutName: "components/pie-chart",
  classNames: ['pie-chart', 'dashboard-widget'],
  

  init: function() {
    this._super();
    this.set('type', "pie");
  }
});