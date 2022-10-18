const btn = document.querySelector(".btn");
const adviceId = document.querySelector(".id span");
const advice = document.querySelector(".advice");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((r) => r.json())
    .then((r) => {
      advice.innerText = r.slip.advice;
      adviceId.innerText = `#${r.slip.id}`;
    });
}

btn.addEventListener("click", getAdvice);
getAdvice();
