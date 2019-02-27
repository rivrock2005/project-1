for(var i = 0; i < works.length; ++i ) {
$("#work").append("\
<div class='col-md-4'>\
  <img class='img-responsive' src='img/me.jpeg'>\
</div>\
");
};

$("#work").append("\
  <div class='col-md'>\
    <img class='img-responsive' src='" + works[i] + "'>\
  </div>\
");
