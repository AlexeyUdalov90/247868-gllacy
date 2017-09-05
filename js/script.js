var btnFeedback = document.querySelector(".button-feedback");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = popupFeedback.querySelector(".close");
var overlay = document.querySelector(".modal-overlay");

btnFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});