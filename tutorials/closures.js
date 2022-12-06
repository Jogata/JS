// In Events
(function count () {
    let counter = 0;
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const result = document.querySelector("#result");
    result.textContent = counter;

    const print = function () {
        console.log(counter);
        result.textContent = counter;
    };

    btn1.addEventListener("click", function count1() {
        counter++;
        print();
    });

    btn2.addEventListener("click", function count2() {
        counter++;
        print();
    });
}());


// To Create something like Module
// Use APP.add3() and APP.multiplyBy3() in the console of the brouser
const APP = (function module() {
    const a = 3;
    const result = document.querySelector("#result");

    const print = function (number) {
        console.log(number);
        result.textContent = number;
    };

    const add3 = function (b) {
        print(a + b);
    };

    const multiplyBy3 = function (b) {
        print(a * b);
    }

    return {
        add3,
        multiplyBy3,
    };
}());


/* ===============  HTML  =============== 
    <h2>Closure Example</h2>
    <button id="btn1">Click!</button>
    <button id="btn2">Click!</button>
*/

/* ===============  CSS  =============== 
      button {
        display: block;
        margin: 10px auto;
        padding: 10px;
        aspect-ratio: 1;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        background-color: teal;
        box-shadow: 2px 2px 3px rgba(0,0,0,0.5);
        cursor: pointer;
      }
*/