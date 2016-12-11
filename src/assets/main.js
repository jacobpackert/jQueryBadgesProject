$(function() {

  // your code will go here
$.ajax({
  url: 'https://www.codeschool.com/users/jacobpackert.json',
  dataType: 'jsonp',
  success: function(response){
    console.log(response);
    $.each(response.courses.completed, function(i){
      // generate the item that we're gonna fill stuff into
      var item = $('<div class="course"></div>');

      // generate the course title
      var courseTitle = response.courses.completed[i].title;
      $('<h3>' + courseTitle + '</h3>').appendTo(item);

      // generate the coursebadge
      var courseBadge = response.courses.completed[i].badge;
      var badgeImage = $('<img></img>');
      $(badgeImage).attr("src", courseBadge);
      $(badgeImage).appendTo(item);

      // generate the link
      var courseLink = $('<a>See Course</a>');
      $(courseLink).attr({
        "href": response.courses.completed[i].url,
        "target": '_blank',
        "class": 'btn btn-primary'
      });
      $(courseLink).appendTo(item);
      // append it all to badges
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
