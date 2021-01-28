console.log("Your index.js file loaded correctly!");

/*Hover Me Image*/
$(document).ready(function(){
    $("#itisi").mouseenter(function(){
        $("#ctaresume").css("background-color","#B58150");
    });
});

$(document).ready(function(){
    $("#itisi").mouseleave(function(){
        $("#ctaresume").css("background-color","#0085CA");
    });
});

/*Overlay*/
$(document).ready(function() {
    $('#ctaresume').click(function() {
       $('#overlay').fadeIn(300);
    });
 
    $('#close').click(function() {
       $('#overlay').fadeOut(300);
    });
 });

 /*Hover My Skills*/
$(document).ready(function(){
    $(".flexSection").hover(function(){
        $(this).css("color","#0085CA");
    });
});

$(document).ready(function(){
    $(".flexSection").mouseleave(function(){
        $(this).css("color","#000000");
    });
});





