var DashboardWidget = DS.Model.extend({
  name: DS.attr(),
  module: DS.attr()
});

DashboardWidget.FIXTURES = [
  { id: 1, name: "Line Chart", module: "ember-dashboard/components/line-chart"},
  { id: 2, name: "Bar Chart", module: "ember-dashboard/components/bar-chart"},
  { id: 3, name: "Pie Chart", module: "ember-dashboard/components/pie-chart"}
];

export default DashboardWidget;