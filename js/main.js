// add scripts

$(document).on('ready', function() {

//global variables
var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

//Example
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// };

//PROBLEM 1 (LOG JOE, CARL, RACHEL, DEREK)
// for (var i = 0; i < 4; i++) {
//   console.log(students[i]);
// }

//PROBLEM 2 (LOG JOE, RACHEL, LILLY)
for (var i = 0; i < students.length; i++) {
  if(i%2==0) {
    console.log(students[i]);
  }
}

});
