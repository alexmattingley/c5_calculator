//Ok, so here I will be figuring out how to add each of the numbers to the input-box.

var operand_array = ['',''];
var number_index = 0;
operand_array[number_index];
var result = null;
var operator = null; 
var final_number;

var new_value="";
function number_click(button_number, digit_value) {
  var first_digit_val = $('#input-box').val();
  new_value= first_digit_val + digit_value;
  $('#input-box').val(new_value);
  operand_array[number_index] = operand_array[number_index] + digit_value;
  console.log(operand_array);
}

//user chooses operator +
$("#add_button").click(function(){
  operator = "+";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});

$("#sub_button").click(function(){
  operator = "-";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});

//creating add numbers function
function add_numbers(){
 final_number = parseInt(operand_array[0]) + parseInt(operand_array[1]);  
}

// defining sub_numbers
function sub_numbers(){
    final_number = parseInt(operand_array[0]) - parseInt(operand_array[1]);
}


function calculate() {
  
  switch(operator) {
    case '+':
      add_numbers();
      $('#input-box').val(final_number);
      break;
    case '-':
      sub_numbers();
      $('#input-box').val(final_number);
      break;
  }

}


// // defining sub_numbers
// function sub_numbers(){
//   var number_0 = $("#number_0").val();
//   var number_1 = $('#number_1').val();
//   var result = parseInt(number_0) - parseInt(number_1);
//   var operator = "-";
//   $("#result_display").text(result);     
// }

// // calling sub_numbers on click
// $("#sub_button").click(function(){
//   sub_numbers();
// });

//defining mul_numbers
function mul_numbers(){
  var number_0 = $("#number_0").val();
  var number_1 = $('#number_1').val();
  var result = parseInt(number_0) * parseInt(number_1);
  var operator = "+";
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
  
  if (number_1 == 0){
      $("#result_display").text("undefined");
  }
  
  else {
    var result = parseInt(number_0) / parseInt(number_1);
    $("#result_display").text(result);
  }
  var operator = '/';

};

//calling div_numbers
$("#div_button").click(function(){
  div_numbers();
});










