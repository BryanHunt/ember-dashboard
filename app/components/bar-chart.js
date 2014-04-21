export default Ember.Component.extend({
  layoutName: "components/bar-chart",
  classNames: ['bar-chart', 'dashboard-widget'],

  init: function() {
    this._super();
    this.set('type', "bar");
  }
});