"use strict"

var RestUtils = function(){

  var get = function(url, callback){
   $.ajax({
     url: url,
     type: 'GET',
     success: callback
   })
  };

  return {
    get: get
  };
}();