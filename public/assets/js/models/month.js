var app = app || {};

// Month Model

app.Month = Backbone.Model.extend({
  // default attributes
  defaults: {
    title: '',
    order: 0
  }
});