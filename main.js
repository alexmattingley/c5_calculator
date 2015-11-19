/**************
Defining global variables that apply through multiple functions
**************/

//number variables and arrays
var number_index = 0;
var number_array = [];
number_array[number_index] = '';
var final_number;

//operator variables and arrays
var operator;
var operator_index = 0;
var operator_array = [];

//input_variables

var $input_box = $('#input-box');



//refresh variables 

var refresh_boolean = false; //this for the reset after someone activates calculate. See calculate function and number click for details and use.
var clear_boolean = false;


//Calculate Array

var calculate_array =[]; //this variable is responsible for storing values that will be used for calculations and displays


/********************
Function name: number click()
Purpose: activates on click of any of the number buttons
Params: digit_value
Globals: refresh_boolean, divide_zero_boolean, $input_box, number_array, number_index
returns: N/A
********************/

function number_click(digit_value) {
  //This part of the function is only activated when the = symbol has been hit
  if (refresh_boolean) {
    refresh_display();
    refresh_boolean = false;
  }

  clear_boolean = false;
  var current_val = $input_box.val(); //this is taking the current string being displayed and sticking it into a variable.
  if (divide_zero_boolean){
    console.log('divide by zero boolean' , divide_zero_boolean);
    current_val = '';
    clear_data();
    divide_zero_boolean = false;
  }
  current_val = current_val + digit_value; //this is taking the current digits and concatenating them the newly pressed digits
  $input_box.val(current_val);//this is taking that new value and putting it in the display
  number_array[number_index] = number_array[number_index] + digit_value; //this is assigning the score card or number_array;
}

/********************
Function name(s): Create Display
Purpose:
Params: N/A
Globals: operator, number_index (this variable is the index for the opperand_array), 
operator_index, operator_array, number_array, final_number
returns: N/A
********************/

function create_calc_array() {
  var calculate_array_index;
  calculate_array_index = 0;
  for(var x = 0; x < number_array.length; x++){
    calculate_array[calculate_array_index] = '';
    calculate_array[calculate_array_index] = number_array[x];
    calculate_array_index = calculate_array_index+2;
  }
  calculate_array_index = 1;
  for(var z = 0; z < operator_array.length; z++){
    calculate_array[calculate_array_index] = '';
    calculate_array[calculate_array_index] = operator_array[z];
    calculate_array_index = calculate_array_index + 2;
  }
}

var for_display;

function create_display() {
  console.log(calculate_array);
  create_calc_array();
  for_display = '';
  for(var y = 0; y < calculate_array.length; y++){
    for_display = for_display + calculate_array[y];
  }
  $input_box.val(for_display);
}


function repeat_op_buttons() {
  //remember that before any of this runs, you set an operator value in the anon functions
  operator_array[operator_index] = operator;
  clear_boolean = true;
  number_index++;
  operator_index++;
  number_array[number_index] = '';
  create_display();
}


// Activates on the press of the + button
$("#add_button").click(function(){
  operator = "+";//setting the operator to +
  repeat_op_buttons(); //calling above function
  
});

//Activates on the press of the - button
$("#sub_button").click(function(){
  operator = "-";
  repeat_op_buttons();
});

//Activates on the press of the * button
$("#mul_button").click(function(){
  operator = "*";
  repeat_op_buttons();
});

//Activates on the press of the / button
$("#div_button").click(function(){
  operator = "/";
  repeat_op_buttons();
});



/*************************
****End of operator buttons
**************************/

/********************
Function name(s): operator action functions. These include add_numbers(), sub_numbers(),
  mul_numbers(), div_numbers().
Purpose: These functions each perform an operation on a set of numbers
Params: N/A
Globals: final_number, number_array
returns: N/A
********************/

var operation_result;
var divide_zero_boolean = false;

function operation_helper(relevant_array, first_number_index){
  relevant_array.splice(first_number_index,2);
  relevant_array[first_number_index] = operation_result;
}

//creation of add_numbers function
function add_numbers(relevant_array, first_number_index, second_number_index){
  operation_result = relevant_array[first_number_index] + relevant_array[second_number_index];
  operation_helper(relevant_array, first_number_index);
}
// creation of sub_numbers function
function sub_numbers(relevant_array, first_number_index, second_number_index){
  operation_result = relevant_array[first_number_index] - relevant_array[second_number_index];
  operation_helper(relevant_array, first_number_index);
}
//creation of mul_numbers function
function mul_numbers(relevant_array, first_number_index, second_number_index){
  operation_result = relevant_array[first_number_index] * relevant_array[second_number_index];
  operation_helper(relevant_array, first_number_index);
}
//creation of div_numbers function
function div_numbers(relevant_array, first_number_index, second_number_index){
  console.log(relevant_array[second_number_index]);
  if(relevant_array[second_number_index] == 0){
    operation_result = "undefined";
    operation_helper(relevant_array, first_number_index);
    console.log('op result' , operation_result);
    console.log('num array' , number_array);
    divide_zero_boolean = true;

  }else {
    console.log('div_numbs');
    operation_result = relevant_array[first_number_index] / relevant_array[second_number_index];
    operation_helper(relevant_array, first_number_index);
  }

}

function operator_switch(relevant_array, current_operator_index, first_number_index, second_number_index) {
  switch(relevant_array[current_operator_index]) {//beginning of switch
    case '+'://triggers on plus symbol
      add_numbers(relevant_array, first_number_index, second_number_index);//calls add numbers function
      break;
    case '-'://triggers on minus symbol
      sub_numbers(relevant_array, first_number_index, second_number_index);//calls subtract function
      break;
    case '*'://triggers on multiply
      mul_numbers(relevant_array, first_number_index, second_number_index);//calls multiply function
      break;
    case '/'://triggers on divide
      div_numbers(relevant_array, first_number_index, second_number_index);//calls divide function
      break;
  }
}


/*************************
****End of operator action functions
**************************/

/********************
Function name(s): calculate()
Purpose: This function calculates and is triggered on a click of the equal button. 
  It ultimately calls the operator actions
Params: N/A
Globals: refresh_boolean, operator
returns: N/A
********************/



function solve_equation() {

  if(number_array[0] == ''){//This is to handle negative numbers right of the bat
    number_array[0] = '0';
  }

  create_calc_array();

  //turn all strings that are numbers into actual numbers so we can feed them into operator switch
  for(var y = 0; y < calculate_array.length; y++){
    if(calculate_array[y] != '+' && calculate_array[y] != '-' && calculate_array[y] != '*' && calculate_array[y] != '/'){
      calculate_array[y] = parseFloat(calculate_array[y]);
    }
  }

  //Handles multiplication and division first
  for(var j = 0; j < calculate_array.length; j++){
    if(calculate_array[j] == '*' || calculate_array[j] == '/'){
      operator_switch(calculate_array, j, j-1,j+1);
      j = j-1;
    }
  }

  //Handles addition and subtraction.
  for(var i = 0; i < calculate_array.length; i++){
    if(calculate_array[i] == '+' || calculate_array[i] == '-'){
      operator_switch(calculate_array, i, i-1, i+1);
      i = i-1;
    }
  }

  //Stop any division by zero
  if(divide_zero_boolean){
    calculate_array[0] = 'undefined';
  }
  final_number = calculate_array[0];
  $input_box.val(final_number);
  clear_data();
  number_array[number_index] = final_number;
}

/********************
Function name(s): clear data
Purpose: This function clears the number_array values but NOT the display value
Params: N/A
Globals: number_array, operator, number_index, operator_array, operator_index
returns: N/A
********************/

function clear_data() {
  number_index = 0;
  number_array = [];
  number_array[number_index] = '';
  operator_array = [];
  operator_index = 0;
  operator = '';
  calculate_array = [];
  for_display = '';
}

/********************
 Function name(s): refresh display
 Purpose: This function clears the display values but NOT the number value
 Params: N/A
 Globals: number_array, number_index
 returns: N/A
 ********************/

function refresh_display() {
  $input_box.val(number_array[number_index]);
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
Globals: number_array, number_index, operator
returns: N/A
********************/

$('#c_button').click(function() {
  if(!clear_boolean){
    number_array[number_index] = '';
    create_display();
    clear_boolean = true;
  }else {
   operator_index--;
   operator_array[operator_index] = '';
   create_display();
  }
});


/******************
 * fun stuff
 */
var bg_and_sound_counter = 0;
var class_counter = 0;

function background_switch() {
  bg_and_sound_counter++;
  document.getElementById('click').play();
  if(bg_and_sound_counter%10 == 0 && bg_and_sound_counter < 40) {
    document.getElementById('slurp').play();
    class_counter++;
    $('body').removeClass();
    $('body').addClass('background-' + class_counter);
  }
}


/******************
 * Horizontally and Vertically Center something
 */

function center_element(element) {
  $(element).addClass('position-center');
  var element_height = $(element).outerHeight();
  console.log(element_height);
  var margin_top_offset = element_height/-2;
  var element_width = $(element).outerWidth();
  console.log(element_width);
  var margin_left_offset = element_width/-2;
  $(element).css('margin-top', margin_top_offset);
  $(element).css('margin-left', margin_left_offset);

}



$(document).ready(function(){

  $('.number-button').click(function(){
    var number = $(this).text();
    number_click(number);
  });

  $('#equal_button').click(function(){
    solve_equation();
  });

  $('button').click(function(){
    background_switch();
  });

});

$(window).load(function(){

  center_element('.position-center');

});











