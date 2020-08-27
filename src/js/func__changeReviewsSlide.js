"use strict";

(function () {
  window.changeReviewsSlide = function () {
    let review = reviewHub[currentReview];
    let sourceDesktopWEBP = document.querySelector(
      ".reviews__source-desktop-webp"
    );
    let sourceDesktopJPG = document.querySelector(
      ".reviews__source-desktop-jpg"
    );
    let sourceTabletWEBP = document.querySelector(
      ".reviews__source-tablet-webp"
    );
    let sourceTabletJPG = document.querySelector(".reviews__source-tablet-jpg");
    let sourceMobileWEBP = document.querySelector(
      ".reviews__source-mobile-webp"
    );
    let sourceMobile = document.querySelector(".reviews__author-image");
    let targetTitle = document.querySelector(".reviews__author-name");
    let targetDescription = document.querySelector(".reviews__text");

    sourceDesktopWEBP.srcset = `img/${review.image}-desktop.webp 1x, img/${review.image}-desktop@2x.webp 2x`;
    sourceDesktopJPG.srcset = `img/${review.image}-desktop.jpg 1x, img/${review.image}-desktop@2x.jpg 2x`;

    sourceTabletWEBP.srcset = `img/${review.image}-tablet.webp 1x, img/${review.image}-tablet@2x.webp 2x`;
    sourceTabletJPG.srcset = `img/${review.image}-tablet.jpg 1x, img/${review.image}-tablet@2x.jpg 2x`;

    sourceMobileWEBP.srcset = `img/${review.image}-mobile@2x.webp 2x`;
    sourceMobile.src = `img/${review.image}-mobile.jpg`;

    sourceMobile.alt = review.alt;
    sourceMobile.srcset = `img/${review.image}-mobile@2x.jpg 2x`;

    targetTitle.innerHTML = review.name;
    targetDescription.innerHTML = review.text;
  };
})();

for (let a of reviewsRadioAll) {
  a.addEventListener("input", changeReviewsSlide);
}
