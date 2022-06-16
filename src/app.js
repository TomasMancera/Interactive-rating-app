const mainCard = document.querySelector(".main-card");
const ratingNumber = document.querySelectorAll(".rating-number");
const secondCard = document.querySelector(".second-card");
const scoreSpan = document.querySelector(".score-span");
const btnSubmit = document.getElementById("btn-submit");
const errorMessage = document.querySelector(".error-message")
let ratingScore = "";


ratingNumber.forEach(num => {
  num.addEventListener('click', numberSelected);

})

function numberSelected(el) {
  ratingNumber.forEach((num) => {
    num.classList.remove("active-state");
  });
  el.target.classList.add("active-state");
  ratingScore = el.target.textContent;
  errorMessage.style.display = "none";
  
}

btnSubmit.addEventListener("click", () => {
  if(!ratingScore){
    errorMessage.style.display = "block";

  }else{
    mainCard.classList.add("hide");
    secondCard.style.display = "flex";
    scoreSpan.textContent = ratingScore;

  }
});


