/**************
Defining global/empty/null variables
**************/

var operand_array = ['',''];
var number_index = 0;
var result = null;
var operator = null; 
var final_number;
var new_value="";
var refresh_boolean = false; //this for the reset after someone activates calculate. See calculate function and number click for details and use.

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



//DWP THIS ONE
function add_numbers(){ //defining add_numbers
 final_number = parseInt(operand_array[0]) + parseInt(operand_array[1]); //defining final_number, which is the operands added together
 $('#input-box').val(final_number); //inputing final number into display
}


function sub_numbers(){ //defining sub_numbers
  final_number = parseInt(operand_array[0]) - parseInt(operand_array[1]);//defining final_number, which is the operands subtracted
  $('#input-box').val(final_number); //inputing final number into display
}


function mul_numbers(){ //defining mul_numbers
  final_number = parseInt(operand_array[0]) * parseInt(operand_array[1]); //defining final_number, which is the operands multiplied
  $('#input-box').val(final_number); //inputing final number into display
};

//creation of div_numbers function
function div_numbers(){ //creation of div_numbers function
  //this if statement is to prevent a divide by 0
  if (operand_array[1] == 0){ //if divide by 0
      $('#input-box').val("undefined"); //insert undefined if trying to divide by 0
  }
  
  else { //otherwise run divide
    final_number = parseInt(operand_array[0]) / parseInt(operand_array[1]); //defining final number which is the operands divided
    $('#input-box').val(final_number); //inputing final number into display
  }

};

/*************************
****End of operator action functions
**************************/

/********************
Function name(s): calculate()
Purpose: This function calculates and is triggered on a click of the equal button. 
  It ultimately calls the operator actions
Params: N/A
Globals: refresh_boolean
returns: N/A
********************/

function calculate() {//define calculate function
  
  switch(operator) {//beginning of switch
    case '+'://triggers on plus symbol
      add_numbers();//calls add numbers function
      break;
    case '-'://triggers on minus symbol
      sub_numbers();//calls subtract function
      break;
    case '*'://triggers on multiply
      mul_numbers();//calls multiply function
      break;
    case '/'://triggers on divide
      div_numbers();//calls divide function
      break;
  }
  refresh_boolean = true;//allows someone to but new number into opperand_array and the display
  clear_data();//clears the values from opperand array. see clear_data function below.
}

/********************
Function name(s): clear data
Purpose: This function clears the operand_array values but NOT the display value
Params: N/A
Globals: operand_array, operator, number_index
returns: N/A
********************/

function clear_data() {
  operand_array[0] = '';
  operand_array[1] = '';
  operator = '';
  number_index = 0;
}


/********************
Function name(s): refresh display
Purpose: This function clears the display values but NOT the operand value
Params: N/A
Globals: Not redefining any variables.
returns: N/A
********************/

function refresh_display() {
  console.log('refresh_display called');
  $('#input-box').val(operand_array[0] + operator + operand_array[1]);
}

/********************
Function name(s): A/C button
Purpose: This function is triggered on the click of ac_button and clears 
both the display and the data
Params: N/A
Globals: refresh_boolean
returns: N/A
********************/

$('#ac_button').click(function(){
  clear_data();
  refresh_display();
  refresh_boolean = false;
});

/********************
Function name(s): C button
Purpose: This function is triggered on the click of c_button and clears 
both the display and the data of the most recently typed number
Params: N/A
Globals: operand_array
returns: N/A
********************/

$('#c_button').click(function() {
  operand_array[number_index] = '';
  $('#input-box').val(operand_array[0] + operator + operand_array[1]);
});












