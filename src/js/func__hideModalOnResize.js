"use strict";

(function () {
  window.hideModalOnResize = function () {
    let modal;
    try {
      modal = document.querySelector(".modal-show-animation");
    } catch (err) {}
    if (modal) {
      modal.classList.add("modal-hide-animation");
      setTimeout(() => {
        modal.classList.remove("modal-hide-animation");
        modal.classList.remove("modal-show-animation");
        modal.classList.remove("modal-error-animation");
        modal.classList.add("hide");
      }, 500);
    }
  };
})();

window.addEventListener("resize", hideModalOnResize);
