var Dashboard = DS.Model.extend({
  widgets: DS.hasMany('dashboard-widget', {async: true})
});

Dashboard.FIXTURES = [
  { id: 1, widgets: [ 1, 2, 3 ] }
];

export default Dashboard;