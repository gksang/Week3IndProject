// ---- Jquery Code to Hover and Add Image Description-----


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

//  -------Jquery Code on Image Click on What We Do section------
$('#des-icon').on('click', function(e)  {
    $('.click-desc-des').fadeIn()
    $('#des-icon').css({"display": "none"});
    $('#des-icon-title').css({"display": "none"});
     
 });
 
 $('.click-desc-des').on('click', function(e)  {   
    $('.click-desc-des').css({"display": "none"});
    $('#des-icon').fadeIn()
    $('#des-icon-title').fadeIn()
     
 });
