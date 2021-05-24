$(function () {
    "use strict";
    var scrollButton = $(".up");
    scrollButton.hide();
    $(window).scroll(function () {
        console.log($(this).scrollTop());
       
          if ($(this).scrollTop() >= 100) {
        
        scrollButton.show(300);
    } else{
        scrollButton.hide();
    }
   });
    
 scrollButton.click(function () {
    $("html,body").animate({scrollTop : 0}, 600);
 });
    
});
