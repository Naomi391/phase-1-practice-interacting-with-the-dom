document.addEventListener("DOMContentLoaded", function () {
  let counterVar = 0;
  let isPaused = false;
  let interval;

  const counterElement = document.getElementById("counter");

  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const heartButton = document.getElementById("heart");
  const pauseButton = document.getElementById("pause");
  const resumeButton = document.createElement("button");

  resumeButton.textContent = "resume";
  resumeButton.id = "resume";

  const likesList = document.querySelector(".likes");

  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("list");

  function updateCounter() {
    counterElement.textContent = counterVar;
  }

  function startTimer() {
    interval = setInterval(function () {
      if (!isPaused) {
        counterVar++;
        updateCounter();
      }
    }, 1000);
  }

  plusButton.addEventListener("click", function () {
    counterVar++;
    updateCounter();
  });

  minusButton.addEventListener("click", function () {
    counterVar--;
    updateCounter();
  });

  heartButton.addEventListener("click", function () {
    const likeItem = document.createElement("li");
    likeItem.textContent = `Number ${counterVar} has been liked`;
    likesList.appendChild(likeItem);
  });

  pauseButton.addEventListener("click", function () {
    if (!isPaused) {
      isPaused = true;
      clearInterval(interval);
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.textContent = "resume";
    } else {
      isPaused = false;
      startTimer();
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      pauseButton.textContent = "pause";
    }
  });

  resumeButton.addEventListener("click", function () {
    isPaused = false;
    startTimer();
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
    pauseButton.textContent = "pause";
  });

  commentForm.addEventListener("click", function (event) {
    event.preventDefault();

    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
      const commentItem = document.createElement("p");
      commentItem.textContent = commentText;
      commentList.appendChild(commentItem);
      commentInput.value = "";
    }
  });
  startTimer();
});
