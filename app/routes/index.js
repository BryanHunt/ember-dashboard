export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      widgets: [
          Ember.Object.create({ name: "Line Chart", module: "ember-dashboard/components/line-chart"}),
          Ember.Object.create({ name: "Bar Chart", module: "ember-dashboard/components/bar-chart"}),
          Ember.Object.create({ name: "Pie Chart", module: "ember-dashboard/components/pie-chart"})
      ]
    });
  }
});
