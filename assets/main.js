$(function() {

  // your code will go here
$.ajax({url: 'https://www.codeschool.com/users/jacobpackert.json',
  dataType: 'jsonp',
  succes: function(response){
        console.log('success')
  }


});




});
