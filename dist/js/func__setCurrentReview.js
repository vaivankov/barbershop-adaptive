"use strict";

(function () {
	window.setCurrentReview = function () {
		currentReview = +this.dataset.reviewNumber;
	};
})();

for (let a of reviewsRadioAll) {
	a.addEventListener("input", setCurrentReview);
}
