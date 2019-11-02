var feedbackLink = document.querySelector(".contacts__btn");
var popup = document.querySelector(".modal-visible");
var close = popup.querySelector(".btn-close");
var popupBackground = document.querySelector(".feedback-visible");


var form = popup.querySelector("form");
var name = popup.querySelector("[name=person]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popupBackground.classList.add("visible");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  popupBackground.classList.remove("visible");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      popupBackground.classList.remove("visible");
    }
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
