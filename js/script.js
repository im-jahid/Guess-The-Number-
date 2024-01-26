document.addEventListener("DOMContentLoaded", () => {
  // grab elements & store in variable
  const main = document.querySelector("#main");
  const form = document.querySelector("form");
  const label = document.querySelector("label");
  const num = document.querySelector("#num");
  const success = document.querySelector("#success");
  const hint = document.querySelector("#hint");
  const showNum = document.querySelector("#show-num");
  const submit = document.querySelector("#submit");
  const reset = document.querySelector("#reset");

  //   initial setup
  
  let generateRandomNum = Math.floor(Math.random() * 30) + 1;
  console.log(`INIT: ${generateRandomNum}`);
  let tries = 1;
  // label.style.visibility = "visible";
  reset.style.visibility = "hidden";

  //   game start
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // get input value
    const getNum = e.target.num.value;

    // guessed number less than mystery number
    if (getNum < generateRandomNum) {
      tries++;
      // success.textContent = "";
      num.value = "";
      hint.textContent = "Oops... Maybe higher number?";
      submit.innerText = "Try Again";
      // guessed number greater than mystery number
    } else if (getNum > generateRandomNum) {
      tries++;
      // success.textContent = "";
      num.value = "";
      hint.textContent = "Hmmm... Let's try lower number";
      submit.innerText = "Try Again";
      // success guessed mystery number
    } else {
      main.innerHTML =
        '<span class="message">Yes! The mystery number is:</span>';
      success.innerHTML = `You got me after <span class="bigger-font">${tries}</span> times!`;
      hint.textContent = "";
      showNum.textContent = `${getNum}`;
      reset.style.visibility = "visible";
      label.style.visibility = "hidden";
      num.style.visibility = "hidden";
      submit.style.visibility = "hidden";
    }
    console.log(`TRY: ${tries}`);
  });

  //   reset game
  reset.addEventListener("click", (e) => {
    e.preventDefault();

    num.value = "";
    reset.style.visibility = "hidden";
    label.style.visibility = "visible";
    num.style.visibility = "visible";
    submit.style.visibility = "visible";
    success.textContent = "";
    showNum.textContent = "";
    submit.textContent = "Let's play!";
    main.textContent = "Choose a number between 1 and 30";

    generateRandomNum = Math.floor(Math.random() * 30) + 1;
    tries = 1;

    console.log(`from reset: ${generateRandomNum}`);
    console.log(`tries from reset: ${tries}`);
  });
});
