"use strict";
const JSCCommon = { 
	modalCall() {
		const link = '[data-fancybox="modal"], .link-modal-js';

		Fancybox.bind(link, {
			arrows: false,
			// infobar: false,
			touch: false,
			trapFocus: false,
			placeFocusBack: false,
			infinite: false,
			dragToClose: false,
			type: 'inline',
			autoFocus: false,
			groupAll: false,
			groupAttr: false,
			// showClass: "fancybox-throwOutUp",
			// hideClass: "fancybox-throwOutDown",
			l10n: {
				Escape: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
			},
		});
		document.querySelectorAll(".modal-close-js").forEach(el=>{
			el.addEventListener("click", ()=>{
				Fancybox.close();
			})
		})
		Fancybox.bind('[data-fancybox]', {
			placeFocusBack: false,
		});
		// const linkModal = document.querySelectorAll(link);
		// function addData() {
		// 	linkModal.forEach(element => {
		// 		element.addEventListener('click', () => {
		// 			let modal = document.querySelector(element.getAttribute("href"));
		// 			const data = element.dataset;

		// 			function setValue(val, elem) {
		// 				if (elem && val) {
		// 					const el = modal.querySelector(elem)
		// 					el.tagName == "INPUT"
		// 						? el.value = val
		// 						: el.innerHTML = val;
		// 					// console.log(modal.querySelector(elem).tagName)
		// 				}
		// 			}
		// 			setValue(data.title, '.ttu');
		// 			setValue(data.text, '.after-headline');
		// 			setValue(data.btn, '.btn');
		// 			setValue(data.order, '.order');
		// 		})
		// 	})
		// }
		// if (linkModal) addData();
	},
	// /modalCall
	toggleMenu() {
		document.addEventListener("click", function (event) {
			const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
			const menu = document.querySelector(".menu-mobile--js");
			const toggleEv = event.target.closest(".toggle-menu-mobile--js");
			if (!toggleEv) return;
			toggle.forEach(el => el.classList.toggle("on"));
			menu.classList.toggle("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.toggle("fixed"));
		}, { passive: true });
	},
	closeMenu() {
		const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		if (menu.classList.contains("active")) {
			toggle.forEach(element => element.classList.remove("on"));
			menu.classList.remove("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.remove("fixed"));
		}

	},
	mobileMenu() { 
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		this.toggleMenu();
		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			let link = event.target.closest(".menu-mobile .menu a"); // (1)
			let toggle = event.target.closest('.toggle-menu-mobile--js.on'); // (1)
			if (!container && !toggle) this.closeMenu();
		}, { passive: true });

		window.addEventListener('resize', () => {
			if (window.matchMedia("(min-width: 992px)").matches) this.closeMenu();
		}, { passive: true });
	},

	// tabs  .
	tabscostume(tab) {
		// const tabs = document.querySelectorAll(tab);
		// const indexOf = element => Array.from(element.parentNode.children).indexOf(element);
		// tabs.forEach(element => {
		// 	let tabs = element;
		// 	const tabsCaption = tabs.querySelector(".tabs__caption");
		// 	const tabsBtn = tabsCaption.querySelectorAll(".tabs__btn");
		// 	const tabsWrap = tabs.querySelector(".tabs__wrap");
		// 	const tabsContent = tabsWrap.querySelectorAll(".tabs__content");
		// 	const random = Math.trunc(Math.random() * 1000);
		// 	tabsBtn.forEach((el, index) => {
		// 		const data = `tab-content-${random}-${index}`;
		// 		el.dataset.tabBtn = data;
		// 		const content = tabsContent[index];
		// 		content.dataset.tabContent = data;
		// 		if (!content.dataset.tabContent == data) return;

		// 		const active = content.classList.contains('active') ? 'active' : '';
		// 		// console.log(el.innerHTML);
		// 		content.insertAdjacentHTML("beforebegin", `<div class="tabs__btn-accordion  btn btn-primary  mb-1 ${active}" data-tab-btn="${data}">${el.innerHTML}</div>`)
		// 	})


		// 	tabs.addEventListener('click', function (element) {
		// 		const btn = element.target.closest(`[data-tab-btn]:not(.active)`);
		// 		if (!btn) return;
		// 		const data = btn.dataset.tabBtn;
		// 		const tabsAllBtn = this.querySelectorAll(`[data-tab-btn`);
		// 		const content = this.querySelectorAll(`[data-tab-content]`);
		// 		tabsAllBtn.forEach(element => {
		// 			element.dataset.tabBtn == data
		// 				? element.classList.add('active')
		// 				: element.classList.remove('active')
		// 		});
		// 		content.forEach(element => {
		// 			element.dataset.tabContent == data
		// 				? (element.classList.add('active'), element.previousSibling.classList.add('active'))
		// 				: element.classList.remove('active')
		// 		});
		// 	})
		// })

		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});

	},
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
		Inputmask({"mask":"+9(999)999-99-99", showMaskOnHover: false}).mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm() {
		var gets = (function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");
			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}
			return b;
		})();
		// form
		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			const th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data,
			}).done(function (data) {

				Fancybox.close();
				Fancybox.show([{ src: "#modal-thanks", type: "inline" }]);
				// window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
					// $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () { });

		});
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {
		$(document).on('click', " .menu li a, .scroll-link", function () {
			const elementClick = $(this).attr("href");
			if (!document.querySelector(elementClick)) {
				$(this).attr("href", '/' + elementClick)
			}
			else {
				let destination = $(elementClick).offset().top;
				$('html, body').animate({ scrollTop: destination - 80 }, 0);
				return false;
			}
		});
	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	},
	toggleShow(toggle, drop) {

		let catalogDrop = drop;
		let catalogToggle = toggle;

		$(document).on('click', catalogToggle, function () {
			$(this).toggleClass('active').next().fadeToggle('fast', function () {
				$(this).toggleClass("active")
			});
		})

		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(catalogDrop + ".active"); // (1)
			let link = event.target.closest(catalogToggle); // (1)
			if (!container || !catalogToggle) {
				$(catalogDrop).removeClass('active').fadeOut();
				$(catalogToggle).removeClass('active');
			};
		}, { passive: true });
	},
	makeDDGroup() {
		let parents = document.querySelectorAll('.dd-group-js');
		for (let parent of parents) {
			if (parent) {
				// childHeads, kind of funny))
				let ChildHeads = parent.querySelectorAll('.dd-head-js:not(.disabled)');
				$(ChildHeads).click(function () {
					let clickedHead = this;

					$(ChildHeads).each(function () {
						if (this === clickedHead) {
							//parent element gain toggle class, style head change via parent
							$(this.parentElement).toggleClass('active');
							$(this.parentElement).find('.dd-content-js').slideToggle(function () {
								$(this).toggleClass('active');
							});
						}
						// else {
						// 	$(this.parentElement).removeClass('active');
						// 	$(this.parentElement).find('.dd-content-js').slideUp(function () {
						// 		$(this).removeClass('active');
						// 	});
						// }
					});

				});
			}
		}
	},
};
const $ = jQuery;

function eventHandler() {
	// JSCCommon.ifie();
	// JSCCommon.modalCall();
	// JSCCommon.tabscostume('tabs');
	// JSCCommon.mobileMenu();
	// JSCCommon.inputMask();
	// JSCCommon.sendForm();
	JSCCommon.heightwindow();
	// JSCCommon.makeDDGroup();
	// JSCCommon.toggleShow(".catalog-block__toggle--desctop", '.catalog-block__dropdown');
	// JSCCommon.animateScroll();
	
	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = document.body.dataset.bg;
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}


	
	function setFixedNav() {
		let topNav = document.querySelector('#header  ');
		if (!topNav) return;
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		// console.log(scrollTop);

		scrollTop > 160 ? topNav.classList.add('fixed') : topNav.classList.remove('fixed');
		scrollTop > 250 ? topNav.classList.add('fixed-animate') : topNav.classList.remove('fixed-animate');
		scrollTop > 400 ? topNav.classList.add('fixed-show') : topNav.classList.remove('fixed-show');
	}

	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();
	}, {
		passive: true
	});
	window.addEventListener('resize', () => {
		whenResize();
	}, {
		passive: true
	});

	whenResize();


	// let defaultSl = {
	// 	spaceBetween: 0,
	// 	lazy: {
	// 		loadPrevNext: true,
	// 	},
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	loop: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: ' .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true,
	// 		// renderBullet: function (index, className) {
	// 		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
	// 		// }
	// 	},
	// }

	// const swiper4 = new Swiper('.sBanners__slider--js', {
	// 	// slidesPerView: 5,
	// 	...defaultSl,
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,

	// });
	// // modal window

	// const headerBlockSlider = new Swiper('.headerBlock__slider--js', {  
	// 	loop: true,
	// 	spaceBetween: 20,
	// 	pagination: {
	// 		el: '.headerBlock .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true, 
	// 	},
	// 	navigation: {
	// 		nextEl: '.headerBlock .swiper-button-next',
	// 		prevEl: '.headerBlock .swiper-button-prev',
	// 	},
	// });
	// const sCatalogSlider = new Swiper('.sCatalog__slider--js', {  
	// 	// loop: true,
		
	// 	spaceBetween: 20,
	// 	grid: {
	// 		rows: 4,
	// 	},
	// 	pagination: {
	// 		el: '.sCatalog .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true, 
	// 	},
	// 	navigation: {
	// 		nextEl: '.sCatalog .swiper-button-next',
	// 		prevEl: '.sCatalog .swiper-button-prev',
	// 	},
	// 	breakpoints: { 
	// 		576: {
	// 			slidesPerView: 2,
	// 			grid: {
	// 				rows: 1,
	// 			}
	// 		},
	// 		992: {
	// 			slidesPerView: 3,
	// 			grid: {
	// 				rows: 1,
	// 			}
	// 		},
	// 		1200: {
	// 			slidesPerView: 4,
	// 			grid: {
	// 				rows: 1,
	// 			}
	// 		}
	// 	}
	// });

	$(document).on("click", '.input-btn--password-toggle ', function () {
		var x = this.parentElement.querySelector(".form-control");
		if (x.type === "password") {
			this.classList.add("show")
			x.type = "text";
		} else {
			this.classList.remove("show")
			x.type = "password";
		}
	})

	// const tabsSlider = new Swiper('.tabs--slider', {  
	// 	slidesPerView: 'auto',
	// 	spaceBetween: 5
	// });

	// const swiperbreadcrumb = new Swiper('.breadcrumb-slider--js', {
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	watchOverflow: true
	// });

	// $('.sMainCatalog__button').on("click", function() {
	// 	$('.sMainCatalog__side-bar').addClass('active');
	// 	$('body').addClass('fixed3');
	// 	document.addEventListener('click', (event) => {
	// 		let container = event.target.closest(".sMainCatalog__side-bar.active"); // (1)
	// 		let toggle = event.target.closest('.sMainCatalog__close'); // (1)
	// 		let fixed = event.target.closest('body.fixed2');
	// 		let button = event.target.closest('.sMainCatalog__button');
	// 		if (  !container && !button) {
	// 			$('.sMainCatalog__side-bar').removeClass('active');
	// 			$('body').removeClass('fixed3');
	// 		};
	// 	}, { passive: true });
	// });
	// $('.sMainCatalog__close').on("click", function() {
	// 	$('.sMainCatalog__side-bar').removeClass('active');
	// 	$('body').removeClass('fixed2');
	// });

	// document.addEventListener('mouseup', (event) => {
	// 	let container = event.target.closest(".menu-mobile--js.active"); // (1)
	// 	let link = event.target.closest(".menu-mobile .menu a"); // (1)
	// 	let toggle = event.target.closest('.toggle-menu-mobile--js.on'); // (1)
	// 	if (!container && !toggle) this.closeMenu();
	// }, { passive: true });

	// $('.sMainCatalog__sort').on("click", function() {
	// 	$('.sMainCatalog__mob-sort').addClass('active');
	// 	$('body').addClass('fixed2');
	// 	document.addEventListener('click', (event) => {
	// 		let container = event.target.closest(".sMainCatalog__mob-sort.active"); // (1)
	// 		let toggle = event.target.closest('.sMainCatalog__close'); // (1)
	// 		let fixed = event.target.closest('body.fixed2');
	// 		let button = event.target.closest('.sMainCatalog__sort');
	// 		if (!toggle && !container && !button) {
	// 			$('.sMainCatalog__mob-sort').removeClass('active');
	// 			$('body').removeClass('fixed2');
	// 		};
	// 	}, { passive: true });
	// });
	// $('.sMainCatalog__close').on("click", function() {
	// 	$('.sMainCatalog__mob-sort').removeClass('active');
	// 	$('body').removeClass('fixed2');
	// });


	// $('.top-nav__tel').on("click", function() {
	// 	$('.tel-block__dropdown').toggleClass('active');
	// });
	// $('.tel-block__toggle').on("click", function() {
	// 	$('.tel-block__dropdown').toggleClass('active');
	// 	$('.tel-block__toggle').toggleClass('active');
	// 	document.addEventListener('click', (event) => {
	// 		let container = event.target.closest(".tel-block__dropdown.active"); // (1)
	// 		let toggle = event.target.closest('.tel-block__toggle'); // (1)
	// 		if (!toggle && !container) {
	// 			$('.tel-block__dropdown').removeClass('active');
	// 			$('.tel-block__toggle').removeClass('active');
	// 		};
	// 	}, { passive: true });
	// });

	// $(".sAbout__link").click(function () {
	// 	$(".hidden-block").slideDown();
	// 	$(".sAbout__link").hide();
	// });

	// let pt = getComputedStyle(document.querySelector('.main-wrapper')).paddingTop.slice(0, -2);
	// console.log(pt);
	// $('.sOrder__side-bar').hcSticky({
	// 	mobileFirst: true,
	// 	responsive: {
	// 		992: {
	// 			stickTo: $('.sOrder .col-lg-4'),
	// 			top: +pt,

	// 		},
	// 	},
  // });

	// let selects = [];
	// selects = $('.custom-select-js');
	// // console.log(selects);
	// for (let i = 0; i < selects.length; i ++) {
	// 	// console.log(selects[i]);
	// 	const choices2 = new Choices(selects[i], {
	// 		searchEnabled: false,
	// 		noResultsText: '',
  //   noChoicesText: '',
  //   itemSelectText: '',
	// 	});
	// }

	// $('.footer__up').on('click', function() {
	// 	window.scrollTo(0, 0);
	// });

	// try {
	// 	var sCardSliderThumbs = new Swiper(".sCard__slider-thumbs--js", {
	// 		spaceBetween: 5,
	// 		direction: "horizontal",
	// 		// slidesPerView: 'auto',
	// 		slidesPerView: 5,
	// 		watchOverflow: true,
	// 		// freeMode: true,
	// 		watchSlidesVisibility: true,
	// 		watchSlidesProgress: true,
	// 		lazy: {
	// 			loadPrevNext: true
	// 		},
	// 		breakpoints: {
	// 			768: {
	// 				direction: "horizontal",
	// 			}
	// 		}
	// 	});
	// 	var sCardSlider = new Swiper(".sCard__slider--js", {
	// 		spaceBetween: 10,
	// 		// watchOverflow: true,
	// 		lazy: {
	// 			loadPrevNext: true
	// 		},
	// 		thumbs: {
	// 			swiper: sCardSliderThumbs,
	// 			watchOverflow: true
	// 		},
	// 		navigation: {
	// 			nextEl: '.swiper-button-next',
	// 			prevEl: '.swiper-button-prev',
	// 		},
	// 		on: {
	// 			slideChange: function (swiper) {
	// 				let curent = document.querySelector(".sCard__slider--js .swiper-slide:nth-child(".concat(swiper.realIndex + 1, ")"));
	// 				console.log(curent);
	// 				let video = curent.querySelector("video");
	// 				console.log(video);
	
	// 				if (video) {
	// 					video.play();
	// 				} // console.log('swiper initialized');
	
	// 			}
	// 		}
	// 	});
		
	// } catch (error) {
		
	// }
	$(".sCard .btn-more").click(function () {
		let th = $(this);

		if (th.text() == "Показать еще") {
			$(".sCard__row-item:hidden").slideDown().addClass("shown");
			th.text("Свернуть");
		} else {
			$(".sCard__row-item.shown").slideUp().removeClass("shown");
			th.text("Показать еще");
		}

		;
	});





	const convertImages = (query, callback) => {
		const images = document.querySelectorAll(query);
	
		images.forEach(image => {
			fetch(image.src)
			.then(res => res.text())
			.then(data => {
				const parser = new DOMParser();
				const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
	
				if (image.id) svg.id = image.id;
				if (image.className) svg.classList = image.classList;
	
				image.parentNode.replaceChild(svg, image);
			})
			.then(callback)
			.catch(error => console.error(error))
		});
	}

	convertImages('.img-to-svg');
	// $(".sFilter__toggle").click(function(){
	// 	$(".sFilter__toggle").toggleClass("active");
	// 	$('.sFilter__dropdown').toggleClass("active");

	// })

	// let switches = document.querySelectorAll(".filter-search-block .form-check-input");
	// for (const input of switches) {
		
	// 	input.addEventListener("click", function(){ 
	// 		let name = input.name;
			
	// 		let tabTrue = document.querySelector(`[data-tab="${name}"][data-accurate="true"]`);
	// 		let tabFalse = document.querySelector(`[data-tab="${name}"][data-accurate="false"]`);
			
	// 		if (input.checked) {
	// 			tabTrue.classList.remove('active');
	// 			tabFalse.classList.add('active');
	// 		}
	// 		else { 
	// 			tabTrue.classList.add('active');
	// 			tabFalse.classList.remove('active');
	// 		}
	// 	})
	// }

	try {
		let imgItems = document.querySelectorAll('.form-wrap__item');
		for (const imgItem of imgItems) {
			imgItem.querySelector('input').onchange = function (evt) {
				var tgt = evt.target || window.event.srcElement,
				files = tgt.files; 
				var fr = new FileReader();
				if (FileReader && files && files.length) {
				fr.onload = function () {
					imgItem.querySelector('.form-wrap img').src = fr.result;
					imgItem.querySelector('.form-wrap__btn-delete').classList.add("active");
					imgItem.classList.add("active");
				}
				fr.readAsDataURL(files[0]); 
				}
				
			}
		
			imgItem.addEventListener("click", function(event){
				let target = event.target.closest(".form-wrap__btn-delete");
				if(this.classList.contains("active") || target) {
					event.stopPropagation();
					this.classList.remove("active")
					imgItem.querySelector('.form-wrap__btn-delete').classList.remove("active");
				} 

			})

	}
	} catch (error) {
		
	}

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }