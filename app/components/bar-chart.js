export default Ember.Component.extend({
  templateName: "components/bar-chart",

  init: function() {
    this._super();
    this.set('type', "bar");
  }
});