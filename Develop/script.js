//variables
var saveBtn = $(".saveBtn");
var clearBtn = $(".clearBtn");
var scheduleEl= $(".schedule");



//display current date/time
    $(function(){
        var today = dayjs().format("MMMM D, YYYY, h:mm");
        console.log(today);
        currentDay.append(today);


//Change row colors to reflet current hour, past and future
    function changeColor(){

        var now = dayjs().hour();
        console.log("It is " + now + " hour");

    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split(".hour"));
        
        if (timeBlock < now) {
            $(this).addClass("past");
          }
          else if (timeBlock === now) {
            $(this).removeClass("past");
            $(this).addClass("present");
          }
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }

    //    if (now > calTime) {
      //     $(this).removeClass("present");
     //      $(this).removeClass("future");
     //      $(this).addClass("past");
     //   } 
     //   else if (now === calTime){
     //       $(this).removeClass("past");
     //       $(this).removeClass("future");
     //       $(this).addClass("present");
     //    }
     //    else if (now < calTime){
     //       $(this).removeClass("past");
     //       $(this).removeClass("present");
     //       $(this).addClass("future");
      //  }

    })
}
//call the function to change color
    changeColor();

//clear btn
clearBtn.on('click', function () {
    scheduleEl.empty();
  });

// save button
    $(saveBtn).on("click", function(){

        var textarea = $(this).siblings(".schecule").val();
        var hour = $(this).parent().attr("id");


//save to local storage
        localStorage.setItem(textarea, hour);
    })
    
//retrived stored input
    $("#hour-7 .schedule") .val(localStorage.getItem("hour-7"));
    $("#hour-8 .schedule") .val(localStorage.getItem("hour-8"));
    $("#hour-9 .schedule") .val(localStorage.getItem("hour-9"));
    $("#hour-10 .schedule") .val(localStorage.getItem("hour-10"));
    $("#hour-11 .schedule") .val(localStorage.getItem("hour-11"));
    $("#hour-12 .schedule") .val(localStorage.getItem("hour-12"));
    $("#hour-13 .schedule") .val(localStorage.getItem("hour-13"));
    $("#hour-14 .schedule") .val(localStorage.getItem("hour-14"));
    $("#hour-15 .schedule") .val(localStorage.getItem("hour-15"));
    $("#hour-16 .schedule") .val(localStorage.getItem("hour-16"));
    $("#hour-17 .schedule") .val(localStorage.getItem("hour-17"));
    $("#hour-20 .schedule") .val(localStorage.getItem("hour-20"));
    $("#hour-21 .schedule") .val(localStorage.getItem("hour-21"));
    

});

