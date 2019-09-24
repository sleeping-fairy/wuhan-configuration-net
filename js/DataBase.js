
$(document).ready(function(){
  $("#icon4").click(function(){
    // alert('1');
    $("#title").toggle()
  })
})     

$(function() {
  var r = 0;
  $('#icon4').click(function() {
    r += 270;
    $(this).css('transform', 'rotate(' + r + 'deg)');
  });
});

