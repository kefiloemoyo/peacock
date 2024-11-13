$(document).ready(function(){
    $("#hide-btn").click(function(){
        $(this).hide();
    });   
});
$(document).ready(function(){
    // when moving line is clicked,scroll down to the"about"
    $(".moving line").click(function(){
        $("html,body").animate({
            scrollTop:$("#about").offset().top
       // },800 );Smooth scroll keyframesEffect, 800ms duration
  
    });  
});

})

