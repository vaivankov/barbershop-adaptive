"use strict";

(function () {
  window.checkIsHotKey = function (evt) {
    if (evt.keyCode === 27) {
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
    }
  };
})();

window.addEventListener("keydown", checkIsHotKey);
