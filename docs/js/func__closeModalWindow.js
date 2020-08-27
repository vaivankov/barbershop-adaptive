"use strict";

(function () {
  window.closeModalWindow = function (evt) {
    evt.preventDefault();
    let modal;
    try {
      modal = document.querySelector(".show");
    } catch (err) {}
    if (modal) {
      modal.classList.add("modal-hide-animation");
      setTimeout(() => {
        modal.classList.remove("modal-hide-animation");
        modal.classList.remove("modal-show-animation");
        modal.classList.remove("modal-error-animation");
        modal.classList.remove("show");
        modal.classList.add("hide");
      }, 500);
    }
  };
})();

loginClose.addEventListener("click", function () {
  closeModalWindow.call(event, event, loginModal);
});
