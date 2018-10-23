$(document).ready(function() {
  $("button#count").click(function(event) {
    var countBy = parseInt($("input#countBy").val());
    var upTo = parseInt($("input#upTo").val());
    if (!countBy || !upTo || countBy<1 || upTo<countBy) {
      alert('Please fill both blanks with positive integers, and make sure your "up to" is greater than your "count by"');
    }
    for (var index = countBy; index <= upTo; index += countBy){
      $("#output").append(index + "<br>");
    }
    (event).preventDefault();
  });
});
