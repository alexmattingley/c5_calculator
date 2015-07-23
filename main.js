//Ok, so here I will be figuring out how to add each of the numbers to the input-box.

var operand_array = ['',''];
var number_index = 0;
operand_array[number_index];
var result = null;
var operator = null; 
var final_number;

var new_value="";
function number_click(button_number, digit_value) {
  if (refresh_boolean) {
    refresh_display();
    refresh_boolean = false;
  }
  else{
    var first_digit_val = $('#input-box').val();
    new_value= first_digit_val + digit_value;
    $('#input-box').val(new_value);
    operand_array[number_index] = operand_array[number_index] + digit_value;
    console.log(operand_array);
  };
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

$("#mul_button").click(function(){
  operator = "*";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});

$("#div_button").click(function(){
  operator = "/";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});
//creating add numbers function
function add_numbers(){
 final_number = parseInt(operand_array[0]) + parseInt(operand_array[1]);
 $('#input-box').val(final_number);  
}

// defining sub_numbers
function sub_numbers(){
  final_number = parseInt(operand_array[0]) - parseInt(operand_array[1]);
  $('#input-box').val(final_number);
}

function mul_numbers(){
  final_number = parseInt(operand_array[0]) * parseInt(operand_array[1]);
  $('#input-box').val(final_number); 
};

function div_numbers(){

  if (operand_array[1] == 0){
      $('#input-box').val("undefined");
  }
  
  else {
    final_number = parseInt(operand_array[0]) / parseInt(operand_array[1]);
    $('#input-box').val(final_number); 
  }

};

var refresh_boolean = false;

function calculate() {
  
  switch(operator) {
    case '+':
      add_numbers();
      break;
    case '-':
      sub_numbers();
      break;
    case '*':
      mul_numbers();
      break;
    case '/':
      div_numbers();
      break;
  }
  refresh_boolean = true;
  clear_data();
}
function clear_data() {
  operand_array[0] = '';
  operand_array[1] = '';
  operator = '';
  number_index = 0;
}

function refresh_display() {
  console.log('refresh_display called');
  $('#input-box').val(operand_array[0] + operator + operand_array[1]);
}


$('#ac_button').click(function(){
  clear_data();
  refresh_display();
  refresh_boolean = false;
});

$('#num_1').click(function(){
  
})













