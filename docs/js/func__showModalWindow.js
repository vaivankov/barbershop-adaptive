"use strict";

(function () {
  window.showModalWindow = function (evt, modal) {
    if (window.innerWidth < 768) {
      return;
    }
    evt.preventDefault();
    modal.classList.add("modal-show-animation");
    modal.classList.add("show");
    modal.classList.remove("hide");
  };
})();

loginButton.addEventListener("click", function () {
  showModalWindow.call(event, event, loginModal);
});
