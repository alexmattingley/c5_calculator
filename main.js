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

//divide by zero boolean

var divide_zero_boolean = false;


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
Function name(s): create_calc_array
Purpose:This function creates the calculate array which is used for creating the display and for making calculations. Each time it is called
 it rewrites the calculate array. There might be a better way to do this, but for now this works.
Params: N/A
Globals: calculate_array, number_array, operator_array
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

/********************************
 Function name(s): create_display
 Purpose:This function creates the string that will be displayed, and it is called each time that we click an operator button
 Params: N/A
 Globals: calculate_array, $input_box
 returns: N/A
 */

function create_display() {
  var for_display;
  create_calc_array();
  for_display = '';
  for(var y = 0; y < calculate_array.length; y++){
    for_display = for_display + calculate_array[y];
  }
  $input_box.val(for_display);
}

/******************************
 * Function name: operator_click
 * purpose: triggered on click of any of the operator buttons, creates operator array, increments number_index and calls the create display function
 * @param button_id
 * Globals: Number_array, number_index, operator_array, operator_index, operator, clear_boolean,
 */

function operator_click(button_id){
  $(button_id).click(function(){
    operator = $(button_id).text();
    operator_array[operator_index] = operator;
    clear_boolean = true;
    number_index++;
    operator_index++;
    number_array[number_index] = '';
    create_display();
  });
}

operator_click('#add_button');
operator_click('#sub_button');
operator_click('#mul_button');
operator_click('#div_button');

/*********************
 * Function Name: operation_helper
 * Purpose: helper function for operation functions below it
 * @param relevant_array
 * @param first_number_index
 * Globals: Operation_result
 * returns: N/A
 */

var operation_result;

function operation_helper(relevant_array, first_number_index){
  relevant_array.splice(first_number_index,2);
  relevant_array[first_number_index] = operation_result;
}


/*********************
 * Function name(s): operator action functions. These include add_numbers(), sub_numbers(),
 mul_numbers(), div_numbers().
 * Purpose: These functions each perform an operation on a set of numbers
 * @param relevant_array
 * @param first_number_index
 * @param second_number_index
 * Globals: divide_zero_boolean, operation_result
 * returns: N/A
 */

function add_numbers(relevant_array, first_number_index, second_number_index){
  operation_result = relevant_array[first_number_index] + relevant_array[second_number_index];
  operation_helper(relevant_array, first_number_index);
}

function sub_numbers(relevant_array, first_number_index, second_number_index){
  operation_result = relevant_array[first_number_index] - relevant_array[second_number_index];
  operation_helper(relevant_array, first_number_index);
}

function mul_numbers(relevant_array, first_number_index, second_number_index){
  operation_result = relevant_array[first_number_index] * relevant_array[second_number_index];
  operation_helper(relevant_array, first_number_index);
}

function div_numbers(relevant_array, first_number_index, second_number_index){
  if(relevant_array[second_number_index] == 0){
    operation_result = "undefined";
    operation_helper(relevant_array, first_number_index);
    divide_zero_boolean = true;

  }else {
    operation_result = relevant_array[first_number_index] / relevant_array[second_number_index];
    operation_helper(relevant_array, first_number_index);
  }

}

/*************************
 ****End of operator action functions
 **************************/

/**********************
 * function name: operator_switch
 * purpose: calls each operation depending on operator
 * @param relevant_array
 * @param current_operator_index
 * @param first_number_index
 * @param second_number_index
 * globals: N/A
 * return: N/A
 */

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

/********************
Function name(s): solve_equation
Purpose: This function calculates using the calculate_array and is triggered on a click of the equal button.
  It ultimately calls the operator actions
Params: N/A
Globals: number_array, number_index, calculate_array, divide_zero_boolean, $input_box, final_number
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

  if(calculate_array[0]%1 != 0){
    final_number = calculate_array[0].toFixed(2);
  }else {
    final_number = calculate_array[0];
  }
  $input_box.val(final_number);
  clear_data();
  number_array[number_index] = final_number;
}

/********************
Function name(s): clear data
Purpose: This function clears the relevant array values but NOT the display value
Params: N/A
Globals: number_array, number_index, operator, operator_array, operator_index, calculate_array
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
}

/********************
 Function name(s): refresh display
 Purpose: This function clears the display values but NOT the number or operator arrays
 Params: N/A
 Globals: number_array, number_index, $input_box
 returns: N/A
 ********************/

function refresh_display() {
  $input_box.val(number_array[number_index]);
}

/***********************
 * AC and Clear Buttons
 */

$('#ac_button').click(function(){
  clear_data();
  refresh_display();
  refresh_boolean = false;
});

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


/********************
 Function name(s): background_switch
 Purpose: This function switches the background after a certain number of button clicks and creates the basic sound effects
 Params: N/A
 Globals: bg_and_sound_counter, class_counter
 returns: N/A
 ********************/
var bg_and_sound_counter = 0;

function background_switch() {
  bg_and_sound_counter++;
  document.getElementById('click').play();
  if(bg_and_sound_counter%10 == 0 && bg_and_sound_counter < 40) {
    document.getElementById('slurp').play();
  }
}


/***************************
 * function name: center_element
 * purpose: Basic function for centering a particular element
 * @param element
 * Globals: N/A
 * returns: N/A
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

/*********************
 * document ready
 */

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

/************************
 * Window load (necessary for the center_element function to work properly)
 */

$(window).load(function(){

  center_element('.position-center');

});











