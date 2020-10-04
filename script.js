$(document).ready(function(){

  // Gets the local storage values for all time blocks and sets them if they already exist
  var task1 = localStorage.getItem("9am");
  $("#nine").text(task1);

  var task2 = localStorage.getItem("10am");
  $("#ten").text(task2);

  var task3 = localStorage.getItem("11am");
  $("#eleven").text(task3);

  var task4 = localStorage.getItem("12pm");
  $("#twelve").text(task4);

  var task5 = localStorage.getItem("1pm");
  $("#one").text(task5);

  var task6 = localStorage.getItem("2pm");
  $("#two").text(task6);

  var task7 = localStorage.getItem("3pm");
  $("#three").text(task7);

  var task8 = localStorage.getItem("4pm");
  $("#four").text(task8);

  var task9 = localStorage.getItem("5pm");
  $("#five").text(task9);


  $(".saveBtn").on("click", function() {
     
      var task = $(this).siblings(".description").val(); // get entry of the description in jQuery
      var time = $(this).siblings(".hour").text();
      localStorage.setItem(time, task);
      $(this).siblings(".description").textContent(localStorage.value); 

  });
  // Displays the current date and time in jumbotron
  $("#currentDay").text(moment().format('dddd, MMMM Do YYYY, h:mm a'));

  // assign color based on past, present and future time slots
  var elements = $(".time-block");
  var d = new Date();
  var h = d.getHours();

  
  for (i = 0; i < elements.length; i++) {
      var t = parseInt(elements[i].getAttribute("data-hour"));

      if (h < t) {
          elements[i].classList.add('future');
          elements[i].classList.remove('past');
          elements[i].classList.remove('present');
      }  else if (h > t) {
          elements[i].classList.add('past');
          elements[i].classList.remove('future');
          elements[i].classList.remove('present');
      } else if (h === t) {
          elements[i].classList.add('present');
          elements[i].classList.remove('future');
          elements[i].classList.remove('past');
      } else if (h > 16 && h < 9) {
          elements[i].classList.add('future');
          elements[i].classList.remove('past');
          elements[i].classList.remove('present');
      }
  }

});