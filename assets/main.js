$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/jacobpackert.json',
  dataType: 'jsonp',
  success: function(response){
    // console.log(response);
    $.each(response.courses.completed, function(i){
      $('#badges').append('<div class="course"></div>');
      });



// I can't get this to work yet
//     $.map(response, function(i){
//       // console.log("mapping");
//       var list = $('<div class="course">' + i + '</div>');
//       $('<p>' + response.courses.completed + '</p>').appendTo(list);
//       console.log(list);
// })



      }


  });



});
