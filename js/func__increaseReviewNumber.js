"use strict";

(function () {
	window.increaseReviewNumber = function () {
		let nextReviewNumber = currentReview + 1;
		let allReviews = reviewHub.length - 1;
		if (nextReviewNumber > allReviews) {
			currentReview = 0;
		} else {
			currentReview = nextReviewNumber;
		}
		changeReviewsSlide();
		reviewsRadioAll[currentReview].checked = true;
	};
})();

nextReviewButton.addEventListener("click", increaseReviewNumber);
