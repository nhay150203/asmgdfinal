// slide show
var slide = [
    './images/images1.jpg',
    './images/images2.jpg',
    './images/images3.jpg',
    './images/images4.jpg',
    './images/images5.jpg',
    './images/images6.jpg',
    './images/images7.jpg',
    './images/images8.jpg',
    './images/images9.jpg',
];
var myindex = 0;
var element = document.querySelector('.header-item')
function change(){
    switch (myindex) {
        case 0:
            element.src = slide[0];
            break;
        case 1:
            element.src = slide[1];
            break;
        case 2:
            element.src = slide[2];
            break;
        case 3:
            element.src = slide[3];
            break;
        case 4:
            element.src = slide[4];
            break;
        case 5:
            element.src = slide[5];
            break;
        case 6:
            element.src = slide[6];
            break;
        case 7:
            element.src = slide[7];
            break;
        case 8:
            element.src = slide[8];
            break;
        case 9:
            element.src = slide[9];
            break;
    }
    myindex ++;
    if(myindex > slide.length){
        myindex = 0;
    }
}
setInterval(change,3500)