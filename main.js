// operator button functionality
var add = null;
$("#add_button").click(function(){
  console.log(add_numbers(1,2));
});

function add_numbers(x,y){
  var add = x+y;
  return add;    
}
