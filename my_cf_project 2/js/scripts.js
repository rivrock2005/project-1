
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
});
});
