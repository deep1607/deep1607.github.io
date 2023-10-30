const message = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function () {
  message.textContent = "Will you come out on a trip with me?";
  yesBtn.textContent = "Yes";
  noBtn.textContent = "No";
  yesBtn.addEventListener("click", function () {
    message.textContent = "Would you like to book a trip to Coorg?";
    yesBtn.textContent = "Yes";
    noBtn.textContent = "No";
    yesBtn.addEventListener("click", function () {
      message.textContent = "Congratulations, booking done!";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    });
    noBtn.addEventListener("click", function () {
      message.textContent = "Sorry to hear that. Maybe next time!";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    });
  });
  noBtn.addEventListener("click", function () {
    message.textContent = "Oh, that's too bad. Maybe next time!";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });
});

noBtn.addEventListener("click", function () {
  message.textContent = "Oh, that's too bad. Maybe next time!";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
