// Do your work in this file.

var boxes = document.querySelectorAll('.box');
console.log('number of boxes = ' + boxes.length);
console.log('belongs to group : ' + parseInt((boxes.length - 1) / 100));

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', (function (i) {
        boxes[i].onclick = function () { boxClicked(i); }
    })(i), true);
}

function boxClicked(m) {

    console.log('this is the box you clicked : ' + m);
    if (boxes[m].className == 'box') {
        boxes[m].className = 'clicked';
    }
    else {
        boxes[m].className = 'box';
    }

    switch (parseInt((boxes.length - 1) / 100)) {
        case 2:
            console.log("201-300 boxes");
            boxes[m].style.backgroundColor = 'yellow';
            break;
        case 3:
            console.log("301-400 boxes");
            boxes[m].style.backgroundColor = 'green';
            break;
        case 4:
            console.log("401-500 boxes");
            boxes[m].style.backgroundColor = 'purple';
            break;
        case 5:
            console.log("501-600 boxes");
            boxes[m].style.backgroundColor = 'orange';
            break;
        case 6:
            console.log("601-700 boxes");
            boxes[m].style.backgroundColor = 'pink';
            break;
        case 7:
            console.log("701-800 boxes");
            boxes[m].style.backgroundColor = 'black';
            break;
        case 8:
            console.log("801-900 boxes");
            boxes[m].style.backgroundColor = 'brown';
            break;
        default:
            console.log("Default");
            boxes[m].style.backgroundColor = 'blue';

    }
}

