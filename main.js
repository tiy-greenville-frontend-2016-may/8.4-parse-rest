//jQuery('h1').html('User Logins');

jQuery(function(){
  (function($){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
      }
    });

    var parseAddress = "http://tiny-parse-server.herokuapp.com/classes/Dietz2/";

    $.get(parseAddress).done(function(data){
      console.log(data);

      var firstResult = data.results[0];

      $.get(parseAddress + firstResult.objectId).done(function(data){
        console.log(data);
      });

    });

    var data = {
      'firstName': 'Speedy',
      'lastName': 'Delivery',
      'message': "Here's your stuff!"
    };

    $.post("https://tiny-parse-server.herokuapp.com/classes/Dietz2/", data).then(function(response){
      console.log(response);

      if(response.objectId){
        alert("saved an object with id:" + response.objectId);
      }
    });

  }(jQuery));
});
