const langButtons = document.querySelectorAll(".lang-btn");
const projectsContainer = document.querySelector(".projects-container");
const langPanels = document.querySelectorAll(".lang-panel");
const langCarousel = document.querySelector(".lang-carousel");

langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		window.scrollTo(0, window.innerHeight);

		langCarousel.setAttribute("class", "");
		langCarousel.classList.add("lang-carousel");

		if (btn.classList.contains("selected")) {
			btn.classList.remove("selected");
			projectsContainer.classList.add("hidden");
			return;
		}

		langButtons.forEach((btn) => {
			btn.classList.remove("selected");
		});
		btn.classList.add("selected");

		projectsContainer.classList.remove("hidden");

		const lang = btn.dataset.lang;

		let pos = -1;

		langPanels.forEach((panel, index) => {
			if (panel.dataset.lang === lang) {
				pos = index;
				return;
			}
		});

		langCarousel.classList.add("pos" + pos);
	});
});

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
	ScrollTrigger.create({
		trigger: elem,
		start: "top 80%",
		end: "bottom 5%",
		markers: false,
		onEnter: function () {
			gsap.fromTo(
				elem,
				{ y: 100, autoAlpha: 0 },
				{
					duration: 1.25,
					y: 0,
					autoAlpha: 1,
					ease: "back",
					overwrite: "auto",
				}
			);
		},
		onLeave: function () {
			gsap.fromTo(
				elem,
				{ autoAlpha: 1 },
				{ autoAlpha: 0, overwrite: "auto" }
			);
		},
		onEnterBack: function () {
			gsap.fromTo(
				elem,
				{ y: -100, autoAlpha: 0 },
				{
					duration: 1.25,
					y: 0,
					autoAlpha: 1,
					ease: "back",
					overwrite: "auto",
				}
			);
		},
		onLeaveBack: function () {
			gsap.fromTo(
				elem,
				{ autoAlpha: 1 },
				{ autoAlpha: 0, overwrite: "auto" }
			);
		},
	});
});

function linkTo(name) {
	let url;

	switch (name) {
		case "google":
			url = "https://www.google.com";
			break;
	}

	window.location = url;
}
