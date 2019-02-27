$(document).ready(function(){
  // smooth scrolling
  var $root = $('html', 'body');
  $('#navbar-example a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // tooltips
  $(function () {
    $('#suffolk').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
  });

  // textarea
  $(".message-box").css("border", "2px solid red");
  $(".message-box").css("background-color", "pink");

  $(".message-box").on("keyup", function() {
  console.log("keyup happened");
  var NameName = 55;
  var Name = 'string';
  var charCount = $(".message-box").val().length;
  //here we set the length of the content of the textarea to a variable
  console.log(charCount);
  $("#char-count").html(charCount);

  if(charCount > 50) {
  $("#char-count").css("color", "red");
}
  else {
  $("#char-count").css("color", "black")
};

  });


  // message form
  $('#button').on('click', function(){
    var usrName = $('#name').val();
    var usrEmail = $('#email').val();
    var usrMsg = $('.message-box').val();
    console.log('clicked');
    // "store" Name
    $('#msgName').html(usrName);
    $('#name').hide();

    // "store" email
    $('#msgEmail').html(usrEmail);
    $('#email').hide();

    // "store" message
    $('#msgBody').html(usrMsg);
    $('.message-box').hide();

    return false;


    // work section
console.log(works);

});
  });
});
