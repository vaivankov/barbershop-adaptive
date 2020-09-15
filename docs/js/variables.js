"use strict";

window.currentReview = 0;

window.reviewHub = [
	{
		name: "Трэвис Баркер",
		image: "travis",
		alt: "Фото Трэвиса Баркера",
		text:
			"Спасибо за лысину! Был проездом в Москве, заскочил побриться, чтобы было видно новую татуировку!",
	},
	{
		name: "Джон Смит",
		image: "john",
		alt: "Фото Джона Смита",
		text: "Отличную стрижку мне сделали ребята.",
	},
	{
		name: "Иван Бородайло",
		image: "ivan",
		alt: "Фото Ивана Бородайло",
		text: "В Бородинском ваша борода в надёжных руках!",
	},
];

window.mainMenu = document.querySelector(".main-nav");
window.mainMenuToggle = document.querySelector(".main-nav__toggle");

window.advantagesRadioAll = document.querySelectorAll(".advantages__slider");
window.reviewsRadioAll = document.querySelectorAll(".reviews__slider");

window.nextReviewButton = document.querySelector(".reviews__next");
window.previousReviewButton = document.querySelector(".reviews__prev");

window.loginButton = document.querySelector(".user-list__login");
window.loginClose = document.querySelector(".modal__close--login");
window.loginModal = document.querySelector(".modal--login");
window.loginSubmit = document.querySelector(".modal__button");

window.modalLoginLoginInput = document.querySelector(".modal__user-icon");
window.modalLoginPasswordInput = document.querySelector(
	".modal__password-icon"
);

mainMenu.classList.remove("main-nav--nojs");
