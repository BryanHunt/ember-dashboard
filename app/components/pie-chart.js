export default Ember.Component.extend({
  templateName: "components/pie-chart",

  init: function() {
    this._super();
    this.set('type', "pie");
  }
});