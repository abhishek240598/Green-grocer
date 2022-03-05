
$("#newuser").click(function (evt){
    evt.preventDefault();
    console.log("it worked");
    $("#login-container").css("visibility","hidden");
    $("#signup-container").css("visibility","visible");
    console.log("end of function");

});

$("#existing-user").click(function (evt){
    evt.preventDefault();
    console.log("it worked");
    $("#signup-container").css("visibility","hidden");
    $("#login-container").css("visibility","visible");
    console.log("end of function");

});

$(".login").click(function(){
    $("#black-screen").css("visibility","visible");
    $("#black-screen").css("transform","translate(0%)");
    $("#black-screen").css("transition","transform 1s 0s");
    $("#black-screen").css("z-index","1");
    $("#login-container").css("z-index","2");
    $("#signup-container").css("z-index","2");

    
    setTimeout(function(){
        $("#login-container").css("visibility","visible");

    },1000);


});

$(".close").click(function(){
    // $("#black-screen").css("visibility","hidden");
    $("#login-container").css("visibility","hidden");
    $("#signup-container").css("visibility","hidden");
    $("#black-screen").css("transform","translate(-100%)");
    $("#black-screen").css("transition","transform 1s 0s");
    $("#black-screen").css("z-index","0");
    $("#login-container").css("z-index","0");
});


var nextSlide = $("#slides img:first-child");
var nextSlideSource;
    
// Start slide show
var timer1 = setInterval(function () {   
        $("#slide").fadeOut(2500,
               function () {
                    if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                nextSlideSource = nextSlide.attr("src");
                $("#slide").attr("src", nextSlideSource).fadeIn(2500);					
            }
        )
}, 12500);
