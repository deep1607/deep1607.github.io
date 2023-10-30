const message = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backButton = document.getElementById("backButton");

function showInvalidResponse() {
  message.textContent = "Invalid response. Please go back to the previous question.";
  backButton.style.display = "block";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

function goBack() {
  backButton.style.display = "none";
  yesBtn.style.display = "block";
  noBtn.style.display = "block";
}

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
    noBtn.addEventListener("click", showInvalidResponse);
  });
  noBtn.addEventListener("click", showInvalidResponse);
});

noBtn.addEventListener("click", showInvalidResponse);

backButton.addEventListener("click", goBack);
