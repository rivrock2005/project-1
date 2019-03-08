// Facebook Code
  window.fbAsyncInit = function() {
    FB.init({
      appId            : 'your-app-id',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.0'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


$(document).ready(function(){
   // your code goes here
   // Smooth Scrolling
     var $root = $('html, body');
     $('#navbar-example a').click(function(event) {
       var href = $.attr(this, 'href');
       if (href != undefined && href != '#') {
         $root.animate({
           scrollTop: $(href).offset().top
         }, 500, function () {
           window.location.hash = href;
         });
       }
       event.preventDefault();
     });

   // Tooltips
     $ (function () {
       $('resume').tooltip();
     });

     $(function () {
       $('[data-toggle="tooltip"]').tooltip();
     });

     // Textarea background color
     $(".message-box").css("background-color", "#e6fff4");

     //Message box character count
     $(".message-box").on("keyup", function() {
         var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable// in here is where the rest of our code for this Exercise will go
         console.log("keyup happened");
          $("#char-count").html(charCount); // here we show a running character count to the user
          if(charCount > 100) {
            $('#char-count').css('color', 'red');
          } else {
            $('#char-count').css('color', 'black');
          };
     });

     // Contact Submission
     $('#button').on('click', function() {
         var comment = $('.message-box').val();
         var prefix = "Thank you, "
         var suffix = ". We have received your message!"
         var name = $('.text-box1').val();
         var email = $('.email-box').val()

         if (comment === "") {
             console.log("message not caputred");
             $(".message-box").css("border", "2px solid red");
         } else {
               $(".message-box").css("border", "");
         } if (name === "") {
             $(".text-box1").css("border", "2px solid red");
         } else {
             $(".text-box1").css("border", "");
         } if (email === "") {
             $(".email-box").css("border", "2px solid red");
         } else {
             $(".email-box").css("border", "");
             $('.text-box1').hide();
             $('.text-box2').hide();
             $('.phone-box').hide();
             $('.email-box').hide();
             $('.message-box').hide(); // maybe keep the message box to show the viewer their message?
             $('#char-count').hide();
             $('#visible-salutation').html(prefix+name+suffix);
             $('#visible-comment').html(comment);
        }
         return false;
     });

     //images /work section
     // console.log(images); to test the connection count of images
     for (var i = 0; i < works.length; ++i) {
        $("#work-images").append("\
           <div class='col-sm-12 col-md-6 col-lg-6'>\
           <a href='" + works[i].url + "' target='_blank' class='work-img'>\
             <img class='img-responsive' src='" + works[i].pic + "'>\
             <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
             </a>\
           </div>\
         ");
         var images = $("#work-images img");
       if (i % 2 === 0) {
           $(images[i]).css("border", "4px solid purple ");
       } else {
           $(images[i]).css("border", "4px solid red");
       };
   };
   $(".work-img").mouseenter(function(){
     $(".info", this).show().css("text-shadow", "2px 2px 5px black");
   }).mouseleave(function(){
     $(".info", this).hide();
   });

   $("#work").append("\
  <div class='col-sm-3 col-md-3'>\
    <a href='#' class='work-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
    </a>\
  </div>\
");

$(".work-img").mouseenter( function() {
});

});
