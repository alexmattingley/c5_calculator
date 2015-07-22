// operator button functionality

$("#add_button").click(function(){
  //assigning values from each input field
    console.log('you pressed add button');
    var number0_val = $("#number_0").val();
    var number1_val = $("#number_1").val();
  //passing those values into the add_numbers function
    add_numbers(number0_val, number1_val);
});

$("#sub_button").click(function(){
  console.log('you pressed add button');
   var number0_val = $("#number_0").val();
   var number1_val = $("#number_1").val();
   subtract_numbers(number0_val, number1_val);
});

$("#mul_button").click(function(){
   var number0_val = $("#number_0").val();
   var number1_val = $("#number_1").val();
   multiply_numbers(number0_val, number1_val);
});

$("#div_button").click(function(){
   var number0_val = $("#number_0").val();
   var number1_val = $("#number_1").val();
   divide_numbers(number0_val, number1_val);
});

function add_numbers(operand1, operand2){
    console.log('add numbers called');
    var result = parseFloat(operand1) + parseFloat(operand2);
    $("#result").val(result);
    $("#operator").text("+");
}

function subtract_numbers(operand1, operand2) {
    console.log('subtract numbers called');
    var result = parseFloat(operand1) - parseFloat(operand2);
    $("#result").val(result);
    $("#operator").text("-");
}

function multiply_numbers(operand1, operand2) {
    console.log('multiply numbers called');
    var result = parseFloat(operand1) * parseFloat(operand2);
    $("#result").val(result);
    $("#operator").text("*");
}

function divide_numbers(operand1, operand2) {
    console.log('divide numbers called');
    var result = parseFloat(operand1) / parseFloat(operand2);
    $("#result").val(result);
    $("#operator").text("/");
}

function input_digit(digit) {
  $("#inputdisplay").val(digit);
}

var operand_array = ["",""];
var number_index = 0;
var operator = '+';
operand_array[number_index]+=digit;