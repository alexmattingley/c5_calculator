/**************
Defining global variables
**************/

//number variables and arrays
var number_index = 0;
var number_array = [];
number_array[number_index] = '';
var result = null;
var final_number;
var new_value="";
console.log(number_array);
//operator variables and arrays
var operator = null;
var operator_index = 0;
var operator_array = [];
console.log(operator_array);

//input_variables

var input_array = [];



//refresh variables 

var refresh_boolean = false; //this for the reset after someone activates calculate. See calculate function and number click for details and use.

/********************
Function name: number click()
Purpose: activates on click of any of the number buttons
Params: digit_value
Globals: new_value, number_array, number_index, new_value
returns: N/A
********************/
function number_click(digit_value) {
  //This part of the function is only activated when the = symbol has been hit
  if (refresh_boolean) {
    refresh_display();
    refresh_boolean = false;
  }

  var first_digit_val = $('#input-box').val(); //this is taking the first digit clicked and assigning it to a variable
  new_value= first_digit_val + digit_value; //this is taking the current digits and concatinating them the newly pressed digits
  $('#input-box').val(new_value);//this is taking that new value and putting it in the display
  number_array[number_index] = number_array[number_index] + digit_value; //this is assigining the score card or number_array;
  console.log(number_array);
}

/********************
Function name(s): operator buttons/anonymous functions
Purpose: activates on clicks of operator buttons. These functions mirror each other
Params: N/A
Globals: operator, number_index (this variable is the index for the opperand_array), 
operator_index, operator_array, number_array, final_number
returns: N/A
********************/

var display_array =[];
var display_index = 0;
var for_display ='';
var final_expression = '';

function create_display() {
  console.log("operator index" , operator_index);
  console.log("number_index", number_index);
  display_array[display_index] = number_array[number_index-1];
  display_array[display_index + 1] = operator_array[operator_index-1];
  display_index = display_index +2;
  for(var x = 0; x < display_array.length; x++) {
    for_display = for_display + display_array[x];
    $('#input-box').val(for_display);
    if(display_array[x] != '+' && display_array[x] != '-' && display_array[x] != '*' && display_array[x] != '/'){
      var string_as_number = parseFloat(display_array[x]);
      display_array[x] = string_as_number;
    }
  }
}



//This function helps simplify the code for each of the operator buttons so we can avoid bugs. It is called in each of anonymous click
//functions below.
function operator_helper() {
  //remember that before any of this runs, you set an operator value in the anon functions
  operator_array[operator_index] = operator;
  console.log("number_array at index: ",number_array[number_index]);
  console.log("operator_array[operator_index]", operator_array[operator_index]);
  number_index++;
  operator_index++;
  number_array[number_index] = '';
  create_display();
  if (operator_index >= 2) { //basically if we have hit number buttons more than once
    switch(operator_array[operator_index - 2]) {//If the first value in the operator array is one of the following, trigger a function
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
    };
  };
}


// Activates on the press of the + button
$("#add_button").click(function(){
  operator = "+";//setting the operator to +
  operator_helper(); //calling above function
  
});

//Activates on the press of the - button
$("#sub_button").click(function(){
  operator = "-";
  operator_helper();
});

//Activates on the press of the * button
$("#mul_button").click(function(){
  operator = "*";
  operator_helper();
});

//Activates on the press of the / button
$("#div_button").click(function(){
  operator = "/";
  operator_helper();
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


//creation of add_numbers function
function add_numbers(){
 final_number = parseFloat(number_array[0]) + parseFloat(number_array[1]);
}
// creation of sub_numbers function
function sub_numbers(){
  final_number = parseFloat(number_array[0]) - parseFloat(number_array[1]);
}
//creation of mul_numbers function
function mul_numbers(){
  final_number = parseFloat(number_array[0]) * parseFloat(number_array[1]);
};
//creation of div_numbers function
function div_numbers(){
  //this if statement is to prevent a divide by 0
  if (number_array[1] == 0){
      $('#input-box').val("undefined");
  }
  
  else {
    final_number = parseFloat(number_array[0]) / parseFloat(number_array[1]);
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
Globals: refresh_boolean, operator
returns: N/A
********************/

function calculate() {//define calculate function
  

  refresh_boolean = true;//allows someone to but new number into number_array and the display
  clear_data();//clears the values from opperand array. see clear_data function below.
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
  display_array = [];
  display_index = 0;
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
  console.log('refresh_display called');
  $('#input-box').val(number_array[number_index]);
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
  number_array[number_index] = '';
  operator_array = []; //clears out the operator array
  operator_index = 0; //sets the operator index back to zero.
  $('#input-box').val(number_array[0] + operator + number_array[1]);
});


/***************
number_array['',''];
index_pointer = 0
input_array['4', '+', '3', '/', '16', '-', '3'];

operator = '';
for(var i = 0; i<input_array.length; i++) {
  if(!isNaN(input_array[i])) //is it a number
}

input_array['11', '+', ''];
in_pointer = 2
*******************/

$(document).ready(function(){

  $('.number-button').click(function(){
    var number = $(this).text();
    number_click(number);
  });

  $('#equal_button').click(function(){
    calculate();
  });

});











