"use strict";

(function () {
	window.toggleMainMenu = function () {
		if (mainMenu.classList.contains("main-nav--closed")) {
			mainMenu.classList.remove("main-nav--closed");
			mainMenu.classList.add("main-nav--opened");
		} else {
			mainMenu.classList.add("main-nav--closed");
			mainMenu.classList.remove("main-nav--opened");
		}
	};
})();

mainMenuToggle.addEventListener("click", toggleMainMenu);
