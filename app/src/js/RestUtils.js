"use strict"
const $ = require("jquery");

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


module.exports = RestUtils
