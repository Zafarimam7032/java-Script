// const use for declare constant in js
// its scope is bracket
const num = 40;
console.log(num);
//num =300;// we can not  modify the value because its constant
console.log(num);
//scope
function vote() {

    if (true) {
        const cnum = 500;
        console.log(num);
    }
    console.log(cnum);// it will throw error

}
vote();
