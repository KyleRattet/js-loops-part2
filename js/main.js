// add scripts

$(document).on('ready', function() {

//global variables
var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

// //Example
// // for (var i = 0; i < students.length; i++) {
// //   console.log(students[i]);
// // };

// //PROBLEM 1 (LOG JOE, CARL, RACHEL, DEREK)
//   for (var i = 0; i < 4; i++) {
//     console.log(students[i]);
//   }

// //PROBLEM 2 (LOG JOE, RACHEL, LILLY)
//   for (var i = 0; i < students.length; i++) {
//     if(i%2==0) {
//       console.log(students[i]);
//     }
//   }

// //PROBLEM 3 (LOG LILY, DERECK, RACHEL. CARL, JOE)
//     for (var i = 0; i < students.length; i++) {
//     var reversedStudents = students.reverse();
//     console.log(reversedStudents[i]);
//     }

// //PROBLEM 4 (LOG JOE, CARL, CARL, RACHEL, RACHEL, DEREK, DEREK, LILY)
//   for (var i = 0; i < students.length; i++) {
//     if(i === 0) {
//       console.log(students[i]);
//     } else if (i === 1) {
//       console.log(students[i]);
//       console.log(students[i]);
//     } else if (i === 2) {
//       console.log(students[i]);
//       console.log(students[i]);
//     } else if (i === 3) {
//       console.log(students[i]);
//       console.log(students[i]);
//     } else console.log(students[4]);
//   }

//ALTERNATE 4, MORE CONCISE
for (var i = 0; i < students.length; i++) {
  if(i === 0 || i === students.length-1) {
    console.log(students[i]);
  } else {
    for (var j = 0; j < 2; j++) {
      console.log(students[i]);
      debugger;
    }
  }
}


});
