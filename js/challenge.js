const counter = document.querySelector("#counter");

//Buttons!
const pause = document.querySelector("#pause");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const notPauseButtons = Array.from(
  document.querySelectorAll("button:not(#pause)")
);

//likes list
const likes = document.querySelector(".likes");

// /get form
form = document.querySelector("#comment-form");

//counter pause logic
let pauseCount = true;

function incrementCounter() {
  let count = counter.innerText;
  counter.innerText = parseInt(count, 10) + 1;
}

function decrementCounter() {
  let count = counter.innerText;
  if (count > 0) {
    counter.innerText = parseInt(count, 10) - 1;
  }
}

function timedCounter() {
  if (pauseCount) {
    incrementCounter();
  }
}

let intervalID = window.setInterval(timedCounter, 1000);

//pause counter when pause is clicked
pause.addEventListener("click", function () {
  pauseCount = !pauseCount;
  notPauseButtons.map((button) => (button.disabled = !pauseCount));
  pause.innerText = "Resume";
});

// increase counter
plus.addEventListener("click", incrementCounter);
// decrease counter
minus.addEventListener("click", decrementCounter);

// like
function addLike() {
  let count = counter.innerText;
  let listItems = Array.from(likes.querySelectorAll("li"));
  //See if we already liked this number
  let li = listItems.find((element) => element.id == count);

  if (li) {
    likeCount = li.querySelector("span");
    likeCount.innerHTML = parseInt(likeCount.innerHTML, 10) + 1;
    console.log("panic!!");
  } else {
    let newLi = document.createElement("li");
    newLi.id = count;
    newLi.innerHTML = `${count} had been liked <span>1</span> times`;
    likes.appendChild(newLi);
  }
}

heart.addEventListener("click", addLike);

// Handle comments
function addComment(e) {
  e.preventDefault();
  const comDiv = document.querySelector("#list");
  let comment = document.getElementById("comment-input").value;
  let newP = document.createElement("p");
  newP.innerHTML = comment;
  comDiv.appendChild(newP);
}

form.addEventListener("submit", addComment);
