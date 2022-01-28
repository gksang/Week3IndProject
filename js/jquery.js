$(document).ready(function() {

    $('.overlay').hover(
        
       function () {
          $(this).css({"opacity":"5"});
       }, 
        
       function () {
          $(this).css({"opacity":"0"});
       }
    );
        
 });