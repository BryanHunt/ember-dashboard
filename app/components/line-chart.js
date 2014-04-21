export default Ember.Component.extend({
  layoutName: "components/line-chart",
  classNames: ['line-chart', 'dashboard-widget'],
  

  init: function() {
    this._super();
    this.set('type', "line");
  }
});