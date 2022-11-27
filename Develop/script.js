//variables
var saveBtn = $(".saveBtn");
var timeBlockEl = $(".time-block");
var currentDay = $("#currentDay");

//display current date/time
$(function(){
    var today = dayjs().format("MMMM D, YYYY, h:mm");
    //console.log(today);
    currentDay.append(today);

//console.log(currnetDay);

//jQuery

//Change row color to reflet current hour, past and future
function changeColor(){

    var now = dayjs().hour();
    console.log("It is" + now + "hour");

    $(".time-block").each(function() {
        
    })
}

// save to local storage
$(".saveBtn").on("click", function(){
    var hour = $(this).parent().attr("id");
    var textarea = $(this). sibling(".schecule").val();

    localStorage.setItem(hour, textarea);
})
    
    //retrived stored input
})

