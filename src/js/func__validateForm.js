"use strict";

window.validateForm = function (evt) {
  if (
    !window.modalLoginLoginInput.value ||
    !window.modalLoginPasswordInput.value
  ) {
    evt.preventDefault();
    window.loginModal.classList.remove("modal-error-animation");
    window.loginModal.scrollLeft = loginModal.scrollLeft;
    window.loginModal.classList.add("modal-error-animation");
    setTimeout(() => {
      window.loginModal.classList.remove("modal-error-animation");
      window.loginModal.classList.remove("modal-show-animation");
    }, 500);
  } else {
    if (window.isStorageSupport) {
      window.localStorage.setItem("login", window.modalLoginLoginInput.value);
    }
  }
};

loginSubmit.addEventListener("click", validateForm);
