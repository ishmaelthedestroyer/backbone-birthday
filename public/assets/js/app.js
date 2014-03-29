var app = app || {};

$(function() {
  new app.AppView();

  var birthdayMonth = (function() {
    // extend module
    _.extend(this, Backbone.Events);

    // special month holder
    var selected = store.get('birthdayMonth') || null;

    if (selected) {
      $('.month-item').each(function(i, element) {
        var $element = $(element);
        if ( $(element).html().indexOf(selected) > -1 ) {
          $element.addClass('selected');
        }
      });
    }

    // listen for dispatched click events
    this.listenTo(app.Dispatcher, 'click', function(e, model) {
      e.preventDefault();
      e.stopPropagation();

      if (model.attributes.title == selected) {
        return false;
      }

      // set selected month
      selected = model.attributes.title;
      store.set('birthdayMonth', selected);

      $('.month-item.selected').removeClass('selected');
      $(e.currentTarget).addClass('selected');

      console.log('BirthdayMonth API: user set "' + selected +
        '" as new birthday month.');
    });

    // listen for dispatched render events
    this.listenTo(app.Dispatcher, 'render', function() {
      if (selected) {
        $('.month-item').each(function(i, element) {
          var $element = $(element);
          if ( $(element).html().indexOf(selected) > -1 ) {
            $element.addClass('selected');
          }
        });
      }
    });

    return {
      getMonth: function() {
        return selected;
      },
      setMonth: function(s) {
        selected = s;
      }
    }


  })();

});