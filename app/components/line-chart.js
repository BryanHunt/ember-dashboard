export default Ember.Component.extend({
  templateName: "components/line-chart",

  init: function() {
    this._super();
    this.set('type', "line");
  }
});