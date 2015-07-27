/**************
Defining global variables
**************/

//number variables and arrays
var number_index = 0;
var operand_array = [];
operand_array[number_index] = '';
var result = null;
var final_number;
var new_value="";
console.log(operand_array);
//operator variables and arrays
var operator = null;
var operator_index = 0;
var operator_array = [];
console.log(operator_array);
//refresh variables 

var refresh_boolean = false; //this for the reset after someone activates calculate. See calculate function and number click for details and use.

/********************
Function name: number click()
Purpose: activates on click of any of the number buttons
Params: digit_value
Globals: new_value, operand_array, number_index, new_value
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
  operand_array[number_index] = operand_array[number_index] + digit_value; //this is assigining the score card or operand_array;
  console.log(operand_array);
}

/********************
Function name(s): operator buttons/anonymous functions
Purpose: activates on clicks of operator buttons. These functions mirror each other
Params: N/A
Globals: operator, number_index (this variable is the index for the opperand_array), 
operator_index, operator_array, operand_array, final_number
returns: N/A
********************/

//This function helps simplify the code for each of the operator buttons so we can avoid bugs. It is called in each of anonymous click
//functions below.
function operator_helper() {
  //remember that before any of this runs, you set an operator value in the anon functions
  operator_array[operator_index] = operator;
  console.log(operator_array);
  console.log(operator_index);
  var post_operator = operand_array[number_index] + operator;
  $('#input-box').val(post_operator);
  number_index = number_index + 1;
  operand_array[number_index] = '';
  operator_index = operator_index +1;
  if (operator_index >= 2) { //basically if we have hit the button more than once
    console.log('your operator_index is >= 2');
    switch(operator_array[operator_index - 2]) {//beginning of switch
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
    operand_array = []; //empty out array;
    operand_array[0] = '' + final_number; //set the final number(outcome) of the operation to the [0] postion of operand_array
    operand_array[1] = '';//make sure we can add stings to the [1] position
    final_number = operand_array[0] + operator; //setting up final number for display
    console.log('final_number after math: ' + final_number );
    $('#input-box').val(final_number); //display final number
    number_index = number_index-1; //count back number index so we can put another value at [1] and do some more math.
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
Globals: final_number, operand_array
returns: N/A
********************/


//creation of add_numbers function
function add_numbers(){
 final_number = parseFloat(operand_array[0]) + parseFloat(operand_array[1]);
 $('#input-box').val(final_number);  
}
// creation of sub_numbers function
function sub_numbers(){
  final_number = parseFloat(operand_array[0]) - parseFloat(operand_array[1]);
  $('#input-box').val(final_number);
}
//creation of mul_numbers function
function mul_numbers(){
  final_number = parseFloat(operand_array[0]) * parseFloat(operand_array[1]);
  $('#input-box').val(final_number); 
};
//creation of div_numbers function
function div_numbers(){
  //this if statement is to prevent a divide by 0
  if (operand_array[1] == 0){
      $('#input-box').val("undefined");
  }
  
  else {
    final_number = parseFloat(operand_array[0]) / parseFloat(operand_array[1]);
    $('#input-box').val(final_number); 
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
Globals: operand_array, operator, number_index, operator_array, operator_index
returns: N/A
********************/

function clear_data() {
  number_index = 0;
  operand_array = [];
  operand_array[number_index] = '';
  operator_array = [];
  operator_index = 0;
  operator = '';
}


/********************
Function name(s): refresh display
Purpose: This function clears the display values but NOT the operand value
Params: N/A
Globals: operand_array, number_index
returns: N/A
********************/

function refresh_display() {
  console.log('refresh_display called');
  $('#input-box').val(operand_array[number_index]);
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
Globals: operand_array, number_index, operator
returns: N/A
********************/

$('#c_button').click(function() {
  operand_array[number_index] = '';
  operator_array = []; //clears out the operator array
  operator_index = 0; //sets the operator index back to zero.
  $('#input-box').val(operand_array[0] + operator + operand_array[1]);
});


/***************
operand_array['',''];
index_pointer = 0
input_array['4', '+', '3', '/', '16', '-', '3'];

operator = '';
for(var i = 0; i<input_array.length; i++) {
  if(!isNaN(input_array[i])) //is it a number
}

input_array['11', '+', ''];
in_pointer = 2
*******************/












