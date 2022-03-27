/* Mobile Menu */

const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const burgerButton = document.querySelector(".burger-btn");
const closeButton = document.querySelector(".close__icon");
const mobileMenu = document.querySelector(".header__nav");
const mobileNav = document.querySelector(".mobile__nav");

burgerButton.addEventListener("click", () => {
	// Open menu
	body.classList.add("no-scroll");
	mobileMenu.classList.add("header__nav--active");
	overlay.style.display = "block";
});

const closeMenu = () => {
	body.classList.remove("no-scroll");
	mobileMenu.classList.remove("header__nav--active");
	overlay.style.display = "none";
};

closeButton.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		mobileNav.classList.add("mobile__nav--active");
	} else {
		mobileNav.classList.remove("mobile__nav--active");
	}
});

//Video

function isInViewport(elem) {
	let elemTop = elem.offsetTop;
	let elemBottom = elemTop + elem.height;
	let viewportTop = window.scrollY;
	let viewportBottom = viewportTop + window.innerHeight;
	return elemBottom > viewportTop && elemTop < viewportBottom;
}

function checkToPlay() {
	let video = document.querySelector(".reasons__img video");
	if (isInViewport(video)) {
		video.play();
	}
}

window.addEventListener("scroll", checkToPlay, false);

/* Language switcher */

const langSwitcher = document.querySelector("#lang__switcher");
const langMenu = document.querySelector(".language__menu");
const ruBtn = document.querySelector("#ru");
const engBtn = document.querySelector("#eng");

langSwitcher.addEventListener("click", () => {
	langMenu.classList.toggle("language__menu--active");
});

/* Translate to Russian */

ruBtn.addEventListener("click", () => {
	//nav
	langMenu.classList.remove("language__menu--active");
	document.querySelector("#rules").innerText = "Правила";
	document.querySelector("#login").innerText = "Вход";
	//hero
	document.querySelector(
		".header__title"
	).innerHTML = `Прозрачная партнёрка<br> <span class="text__stress"> с крепким
	конвертом</span><br> и приятным аппрувом`;
	document.querySelector(".sign-up__btn").innerText = "Зарегистрироваться";
	//Feature
	document.querySelector(".features__title").innerHTML =
		"Основные моменты<br> нашей компании:";

	const featureStepDescribes = [
		"Работаем без холда <br> и задержки выплат",
		"Мы протестировали приватные офферы",
		"Даём высокий <br> аппрув",
		"Даём индивидуальные условия и ставки",
		"Техническая поддержка на любом этапе работы",
	];

	const futuresStep = Array.from(
		document.querySelectorAll(".featurse__step .step__describe")
	);

	futuresStep.forEach((element) => {
		element.innerHTML = featureStepDescribes[futuresStep.indexOf(element)];
	});

	//About
	document.querySelector(".about__title").innerHTML =
		"Присоединяйся к нам, и начинай <br> зарабатывать";

	document.querySelector(
		".about__text--first"
	).innerHTML = `Наша партнёрская сеть <span class="fw-900 clr-w">основана
		командой вебмастеров</span>,
	которые не понаслышке знают, что такое низкие ставки и аппрув, отвратительный конверт
	из-за некачественных промо-материалов, холд на выплаты, кидалово со стороны рекламодателя.`;

	document.querySelector(
		".about__text--second"
	).innerHTML = `Организовывая собственную партнёрку мы учли все эти моменты и предлагаем работать нашим в
	ебмастерам и арбитражникам<span class="fw-900 clr-w"> только с проверенными рекламодателями</span>,
	которым уже очень давно мы сами предоставляем трафик.`;

	document.querySelector(
		".about__text--third"
	).innerHTML = `Благодаря тому, что сами <span class="fw-900 clr-w">стабильно даём лиды</span>, мы всегда в
	курсе, какой ленд конвертит или почему не работают платёжки. Готовы прийти на помощь каждому, чтобы трафик лился,
	а доллар зарабатывался.`;

	//Reasons
	document.querySelector(".reasons__title").innerHTML =
		"Трезвый проект, который <br> изменит вашу жизнь";

	const reasonsStepDescribes = [
		"Прозрачность в <br> работе и условиях",
		"Простота <br> взаимодействия",
		"В голову бьёт <br> высокий заработок",
		"Крепость и надёжность <br> сотрудничества",
	];

	const reasonsStep = Array.from(
		document.querySelectorAll(".reasons__step .step__describe")
	);

	reasonsStep.forEach((element) => {
		element.innerHTML = reasonsStepDescribes[reasonsStep.indexOf(element)];
	});
	document.querySelector(".sign-up__link").innerText = "Зарегистрироваться";

	//Footer

	const footerLinksText = ["Пользовательское соглашение", "Правила", "FAQ"];
	const footerLinks = Array.from(document.querySelectorAll(".footer__link"));

	footerLinks.forEach((item) => {
		item.innerText = footerLinksText[footerLinks.indexOf(item)];
	});
	langSwitcher.innerText = "RU";
});

/* Translate to English */

engBtn.addEventListener("click", () => {
	//nav
	langMenu.classList.remove("language__menu--active");
	document.querySelector("#rules").innerText = "Rules";
	document.querySelector("#login").innerText = "Login";
	//hero
	document.querySelector(
		".header__title"
	).innerHTML = `Transparent affiliate with <span class="text__stress"> a strong envelope </span><br>
		and a nice approve`;
	//Feature
	document.querySelector(".features__title").innerHTML =
		"Highlights of <br> our company:";

	const featureStepDescribes = [
		"We work with no holds <br> and no delays in payments",
		"We have tested private offers",
		"Giving a high <br> approve",
		"Give individual terms and rates",
		"Technical support at any stage of work",
	];

	const futuresStep = Array.from(
		document.querySelectorAll(".featurse__step .step__describe")
	);

	futuresStep.forEach((element) => {
		element.innerHTML = featureStepDescribes[futuresStep.indexOf(element)];
	});

	//About

	document.querySelector(".about__title").innerHTML =
		"Join us and start <br> earn money";

	document.querySelector(
		".about__text--first"
	).innerHTML = `Our affiliate network is <span class="fw-900 clr-w">
	founded by a team of webmasters </span> who know first-hand what low
	bids and upsells, lousy conversion rates due to low-quality
	promo materials, hold on payouts, scamming by advertisers.`;

	document.querySelector(
		".about__text--second"
	).innerHTML = `When we set up our own affiliate program, we took all
	these aspects into consideration and offer to our webmasters and
	arbitrageurs to work <span class="fw-900 clr-w"> only with trusted
	advertisers </span> to whom we have been providing traffic ourselves
	for a very long time. `;

	document.querySelector(
		".about__text--third"
	).innerHTML = `Because we give leads consistently ourselves, we are always aware of which
	leads are converting or why the payments
	aren't working. We are ready to help everyone so that traffic flows and dollars are made. `;

	//Reasons
	document.querySelector(".reasons__title").innerHTML =
		"A sobering project that <br> will change your life";

	const reasonsStepDescribes = [
		"Transparency in <br> work and conditions",
		"Simplicity <br> interaction",
		"It's a head-scratcher <br> the high wages",
		"Strength and reliability <br> cooperation",
	];

	const reasonsStep = Array.from(
		document.querySelectorAll(".reasons__step .step__describe")
	);

	reasonsStep.forEach((element) => {
		element.innerHTML = reasonsStepDescribes[reasonsStep.indexOf(element)];
	});

	document.querySelector(".sign-up__link").innerText = "Sign UP";

	//Footer

	const footerLinksText = ["User Agreement", "Rules", "FAQ"];
	const footerLinks = Array.from(document.querySelectorAll(".footer__link"));

	footerLinks.forEach((item) => {
		item.innerText = footerLinksText[footerLinks.indexOf(item)];
	});
	langSwitcher.innerText = "ENG";
});
