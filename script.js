// Do your work in this file.

var boxes = document.querySelectorAll('.box');
console.log('number of boxes = ' + boxes.length);
console.log('belongs to group : ' + parseInt((boxes.length-1)/100));

for (var i = 0; i < boxes.length; i++) {
     boxes[i].addEventListener('click',function(){boxClicked(i)},false);
}

function boxClicked(m){
    console.log('this is the box you clicked : ' + m);

switch (parseInt((boxes.length-1)/100)) {
    case 2:
        console.log("201-300 boxes");
        boxes[m].style.backgroundColor = 'yellow';
        console.log(m);
        break;
    case 3:
        console.log("301-400 boxes");
        boxes[m].style.backgroundColor = 'green';
        console.log(m);
        break;
    case 4:
        console.log("401-500 boxes");
        boxes[m].style.backgroundColor = 'purple';
        console.log(m);
        break;
    case 5:
        console.log("501-600 boxes");
        boxes[m].style.backgroundColor = 'orange';
        console.log(m);
        break;
    default:
        console.log("Default");
}}

// for (var i = 0; i < boxes.length; i++) {
//      boxes[i].addEventListener('click', function (){
// switch (parseInt((boxes.length-1)/100)) {
//     case 2:
//         console.log("201-300 boxes");
//         console.log(i);
//         boxes[i].style.backgroundColor = 'yellow';
//         break;
//     case 3:
//         console.log("301-400 boxes");
//         console.log(i);
//         boxes[i].style.backgroundColor = 'green';
//         break;
//     case 4:
//         console.log("401-500 boxes");
//         console.log(i);
//         boxes[i].style.backgroundColor = 'purple';
//         break;
//     case 5:
//         console.log("501-600 boxes");
//         console.log(i);
//         boxes[i].style.backgroundColor = 'orange';
//         break;
//     default:
//         console.log("Default");
// }});
// }





// function modifyText() {
//   var t2 = document.getElementById("t2");
//   if (t2.firstChild.nodeValue == "three") {
//     t2.firstChild.nodeValue = "two";
//   } else {
//     t2.firstChild.nodeValue = "three";
//   }
// }

// var el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);
