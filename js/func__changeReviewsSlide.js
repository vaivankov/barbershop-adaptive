"use strict";

(function () {
	window.changeReviewsSlide = function () {
		let review = reviewHub[currentReview];
		let sourceDesktop = document.querySelector(".reviews__source-desktop");
		let sourceTablet = document.querySelector(".reviews__source-tablet");
		let sourceMobile = document.querySelector(".reviews__author-image");
		let targetTitle = document.querySelector(".reviews__author-name");
		let targetDescription = document.querySelector(".reviews__text");

		sourceDesktop.srcset = `img/raster/${review.image}-desktop.jpg 1x, img/raster/${review.image}-desktop@2x.jpg 2x`;
		sourceTablet.srcset = `img/raster/${review.image}-tablet.jpg 1x, img/raster/${review.image}-tablet@2x.jpg 2x`;
		sourceMobile.src = `img/raster/${review.image}-mobile.jpg`;
		sourceMobile.srcset = `img/raster/${review.image}-mobile@2x.jpg 2x`;
		targetTitle.innerHTML = review.name;
		targetDescription.innerHTML = review.text;
	};
})();

for (let a of reviewsRadioAll) {
	a.addEventListener("input", changeReviewsSlide);
}
