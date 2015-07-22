// operator button functionality
var result = null;
$("#add_button").click(function(){
  add_numbers();
});

function add_numbers(){
  var number_0 = $("#number_0").val();
  var number_1 = $('#number_1').val();
  var result = parseInt(number_0) + parseInt(number_1);
  $("#result_display").text(result);     
}
