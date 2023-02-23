const inputNumber = document.querySelector("#inputNumber");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const alertError = document.querySelector('.alert-error');

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', keydownEnter);

function handleTryClick(event) {
   event.preventDefault();

   const SmalllerOrBiggerNumber = inputNumber.value < 0 || inputNumber.value > 10 || inputNumber.value == '';

   if (SmalllerOrBiggerNumber) {
    alertError.classList.add('open');
    return;
 };

 alertError.classList.remove('open');

   if(Number(inputNumber.value == randomNumber)){
     toglleScreen();
     screen2.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativa`
   }

   inputNumber.value = "";
   xAttempts++;
};

function handleResetClick () {
    toglleScreen();
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toglleScreen () {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");

}

function keydownEnter (e) {
    if(e.key == "Enter" && screen1.classList.contains('hide')) {
        handleResetClick();
    };
}
