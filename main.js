/**************
Defining global/empty/null variables
**************/

var operand_array = ['',''];
var number_index = 0;
operand_array[number_index];
var result = null;
var operator = null; 
var final_number;
var new_value="";
var refresh_boolean = false; //this for the reset after someone activates calculate. See calculate function and number click for details and us.

/********************
Function name: number click()
Purpose: activates on click of any of the number buttons
Params: digit_value
Globals: new_value, operand_array
returns: N/A
********************/
function number_click(digit_value) {
  //This part of the function is only activated when the = symbol has been hit
  if (refresh_boolean) {
    refresh_display();
    refresh_boolean = false;
  }

  var first_digit_val = $('#input-box').val();
  new_value= first_digit_val + digit_value;
  $('#input-box').val(new_value);
  operand_array[number_index] = operand_array[number_index] + digit_value;
  console.log(operand_array);
}

/********************
Function name(s): operator buttons/anonymous functions
Purpose: activates on clicks of operator buttons. These functions mirror each other
Params: N/A
Globals: operator, number_index
returns: N/A
********************/
// Activates on the press of the + button
$("#add_button").click(function(){
  operator = "+";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});

//Activates on the press of the - button
$("#sub_button").click(function(){
  operator = "-";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});

//Activates on the press of the * button
$("#mul_button").click(function(){
  operator = "*";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});

//Activates on the press of the / button
$("#div_button").click(function(){
  operator = "/";
  var post_operator = operand_array[0] + operator;
  $('#input-box').val(post_operator);
  number_index = 1;
});

/*************************
****End of operator buttons
**************************/

/********************
Function name(s): operator action functions. These include add_numbers(), sub_numbers(),
  mul_numbers(), div_numbers().
Purpose: These functions each perform an operation on a set of numbers
Params: N/A
Globals: final_number
returns: N/A
********************/


//creation of add_numbers function
function add_numbers(){
 final_number = parseInt(operand_array[0]) + parseInt(operand_array[1]);
 $('#input-box').val(final_number);  
}

// creation of sub_numbers function
function sub_numbers(){
  final_number = parseInt(operand_array[0]) - parseInt(operand_array[1]);
  $('#input-box').val(final_number);
}

//creation of mul_numbers function
function mul_numbers(){
  final_number = parseInt(operand_array[0]) * parseInt(operand_array[1]);
  $('#input-box').val(final_number); 
};

//creation of div_numbers function
function div_numbers(){

  if (operand_array[1] == 0){
      $('#input-box').val("undefined");
  }
  
  else {
    final_number = parseInt(operand_array[0]) / parseInt(operand_array[1]);
    $('#input-box').val(final_number); 
  }

};



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













