
var result = null;

//creating add numbers function
function add_numbers(){
  var number_0 = $("#number_0").val();
  var number_1 = $('#number_1').val();
  var result = parseInt(number_0) + parseInt(number_1);
  $("#result_display").text(result);     
}

//calling addnumbers on the click of id add_button
$("#add_button").click(function(){
  add_numbers();
});

// defining sub_numbers
function sub_numbers(){
  var number_0 = $("#number_0").val();
  var number_1 = $('#number_1').val();
  var result = parseInt(number_0) - parseInt(number_1);
  $("#result_display").text(result);     
}

// calling sub_numbers on click
$("#sub_button").click(function(){
  sub_numbers();
});

//defining mul_numbers
function mul_numbers(){
  var number_0 = $("#number_0").val();
  var number_1 = $('#number_1').val();
  var result = parseInt(number_0) * parseInt(number_1);
  $("#result_display").text(result);  
};

//calling mul_numbers
$("#mul_button").click(function(){
  mul_numbers();
});

//defining div_numbers
function div_numbers(){
  var number_0 = $("#number_0").val();
  var number_1 = $('#number_1').val();
  var result = parseInt(number_0) / parseInt(number_1);
  $("#result_display").text(result);  
};

//calling div_numbers
$("#div_button").click(function(){
  div_numbers();
});
