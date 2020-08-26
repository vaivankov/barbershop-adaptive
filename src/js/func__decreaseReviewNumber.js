"use strict";

(function () {
	window.decreaseReviewNumber = function () {
		let previousReviewNumber = currentReview - 1;
		let allReviews = reviewHub.length - 1;
		if (previousReviewNumber < 0) {
			currentReview = allReviews;
		} else {
			currentReview = previousReviewNumber;
		}
		changeReviewsSlide();
		reviewsRadioAll[currentReview].checked = true;
	};
})();

previousReviewButton.addEventListener("click", decreaseReviewNumber);
