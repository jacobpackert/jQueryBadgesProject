$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/jacobpackert.json',
  dataType: 'jsonp',
  success: function(response){
    console.log(response);
    $.each(response.courses.completed, function(i){
      var item = $('<div class="course"></div>');
      var courseTitle = response.courses.completed[i].title;
      $('<h3>' + courseTitle + '</h3>').appendTo(item);
      var courseBadge = response.courses.completed[i].badge;
      var badgeImage = $('<img></img>');
      $(badgeImage).attr("src", courseBadge);
      // console.log(badgeImage);
      $(badgeImage).appendTo(item);
      $('#badges').append(item);
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
