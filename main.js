// question1
function checkAlphabet() {
    var ch = document.getElementById('checkAlpha').value;
    if (ch === ch.toUpperCase()) {
        document.getElementById('ans1').innerHTML = "Yes! Entered Alphabhet is Uppercase";
    } else {
        document.getElementById('ans1').innerHTML = "No! Entered Alphabhet is Uppercase";
    }
}
// question2
function checkDay() {
    var day = document.getElementById('checkDay').value;
        day = parseInt(day);
        switch(day) {
        case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
    }
    document.getElementById("ans2").innerHTML = "Today is " + day;
}
// Question.3
function monthDay(){
  var month = document.getElementById("month");
  var newMonth = month.value;
  if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
      document.write("There are 31 Days In this Month.");
  }else if(month==2){
      document.write("There are 28 or 29 Days in this Month.");
  }else if(month==4||6||9||11){
      document.write("There are 30 Days in this Month.");
  }
  var u = monthDay();
  document.getElementById("ans3").innerHTML = u;
  return newMonth;
}
// Question.4   
function notesCounter(){
  var notes = [5000, 1000, 500, 100, 50, 20 ,10, 5, 2, 1];
  var amount = document.getElementById('notes').value;
  var notesAmount = 0;
  
  for(var i = 0; i < 10; i++ ){
      notesAmount = amount % notes[i];
  }
  document.getElementById('ans4').innerHTML = notesAmount;
}
// Question.5
function angleChecker(){
  var inputArray = [];
  inputArray = document.getElementById('angles');
  var newInputArr = inputArray.value;

for(var i=0; i<newInputArr.length; i++){
  i += i;
  if( i == 180 ){
    document.getElementById('ans5').innerHTML = 'Oh yeah! it is a triangle.';
  }else{
    document.getElementById('ans5').innerHTML = 'No, it is not a triangle.';
  }
}
}

