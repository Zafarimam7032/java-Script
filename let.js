// it act as local varible is js
let num = 300;
console.log(num);
num = 3000;// we an modify value also
console.log(num);
// scope
function show() {
    if (true) {
        let message = "Zafar is going to be java script developer";
        console.log(message);
    }
    //console.log(message);// it will throw error because it act as local variable ;
}
show();