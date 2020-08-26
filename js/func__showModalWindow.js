"use strict";

(function () {
	window.showModalWindow = function (evt, modal) {
		evt.preventDefault();
		modal.classList.add("modal-show-animation");
		modal.style = "display: block;";
	};
})();

loginButton.addEventListener("click", function () {
	showModalWindow.call(event, event, loginModal);
});
