# c5_calculator

## A basic calculator application

I initially began this project during my time as a student at LearningFuze. The idea behind the project was to create a very basic calculator using javascript to perform the basic calculations.
I noticed that alot of the calculators that I found online didn't look very nice, so I wanted to design something a little different that was visually appealing.

####A Note: The calculator works on a mobile phone, but it looks best on a tablet or a desktop.


##Site challenges and Fun Problems

This was the second javascript centered project that I ever took on, so subsequently it was a challenge from the start. The purpose of the project was to learn a bit more about Javascript and
the peculiar aspects of the language. I was under the impression at the start of the project that it would be very simple but I was surprised how much more nuanced it was
than I originally anticipated.

This project really hit home the need to pay close attention to data types, particularity how javascript handles strings and numbers differently. For example:

var num = '1'+'2' -> num == '12'. This is because javascript uses the + to concatenate the values rather than as an addition symbol.

There are tons of weird little quirks like the one above, and building a calculator forces one to be aware and account for all of them.

##Languages and Skills Used

HTML, CSS, Javascript, Jquery, Git & Github



##Scope

## Calculator 0.1
HTML:
- Input: number_0
- Input: number_1
- div: result_display
- button: add
Functionality:
- function add_numbers()
- Adds two numbers together
- Two numbers are pulled from the inputs
- Result is put into result_display div’s contents

### Calculator 0.5
Additional Functionality:
- Add buttons / functions for:
   - subtract
   - divide
     - Take into account if the divisor is 0
   - multiply

### Calculator 1.0
HTML:
- 10 buttons, 1 for each digit (0-9)
- 4 buttons, 1 per operator (+,-,/,*)
- 1 button, for an equal operator (=)
Functionality:
- add, subtract, divide, multiply functions
- Each takes 2 numbers as input
- Each returns 1 number as output, the result of its math
- calculate function
- called by =
- uses a switch to pick which math function to run
- updates the result input with the value of the mathematical operation

### Calculator 1.5
HTML:
- AC - clears all numbers, the operator, and the display
- Clear - clears only the current number and display

### Calculator 2.0

HTML:
- Place a result field on the calculator to hold the result of all math
Functionality:
- Pressing successive mathematical operations does not complete the operation, for example
   - 1+2+3+4+5 would not do anything until the = key is pressed
   - after the = key is pressed, would perform all math, yielding 15
   - put all results into the result field

### Calculator 3.0 (completed 11/20/2015)

- Redesign user interface
- Switch backgrounds depending on number of clicks, avoid jerky loading of background image.
- refactor code, move or remove unnecessary globals, arrays and functions.


