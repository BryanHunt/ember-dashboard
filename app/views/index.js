export default Ember.ContainerView.extend({
  didInsertElement: function() {
    this._super();
    var container = this;
    this.get('controller.widgets').forEach(function(widget) {
      var widget = require(widget.get('module'))['default'].create();
      container.pushObject(widget);
    });
  }
});