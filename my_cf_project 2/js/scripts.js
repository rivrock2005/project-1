$(document).ready(function(){
  $(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // textarea background
  $(function () {
    $("#item1").tooltip();
  });
 </script>



});
