var app = app || {};

$(function() {
  new app.AppView();

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  // loop through months array, add to Year collection
  for (var i = 0; i < months.length; i++) {
    app.Year.add({
      title: months[i], // month name
      order: i + 1 // index
    });
  };

  console.log(app.Year.toJSON());
});