/* Template: Sync - Free Mobile App Landing Page HTML Template
		(LATER CHANGED)
		Author: Inovatik
		Created: Dec 2019
		Description: Custom JS file
*/

const overlay = document.querySelector(".overlay");
window.addEventListener("load", function () {
	$(document.body).prepend('<div class="alert fix-top danger"><strong>Aviso!</strong>&nbsp;O projeto foi encerrado e não é mais possível acessá-lo</div>');
	overlay.style.display = "none";
})

//Counter - CountTo
var a = 0;
$(window).scroll(function () {
	if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},
					{
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
							//alert('finished');
						}
					});
			});
			a = 1;
		}
	}
});

//Year update
let sectionYear = document.querySelector('#year');
date = new Date();
if (isNaN(date)) {
	sectionYear.textContent = '2022';
} else {
	sectionYear.textContent = date.getFullYear();
}

//Scroll-top
$('body').prepend('<a href="#body" class="back-to-top nav-link page-scroll">Back to Top</a>');
var amountScrolled = 300;
$(window).scroll(function () {
	if ($(window).scrollTop() > amountScrolled) {
		$('a.back-to-top').fadeIn('200');
	} else {
		$('a.back-to-top').fadeOut('200');
	}
});

//Controle de accordions
function accordion(id) {
	let idElemento = document.querySelector("#" + id);
	let label = document.querySelector("." + id);

	if (idElemento.checked) {
		label.style.backgroundColor = "#2631FF";
	} else {
		label.style.backgroundColor = "#000000";
	}
}

function internalLink(id) {
	document.querySelector('#' + id + "-i").setAttribute('class', 'bi bi-box-arrow-up-left');
}

function noLink(id) {
	document.querySelector('#' + id + "-i").setAttribute('class', '');
}

function externalLink(id) {
	document.querySelector('#' + id + "-i").setAttribute('class', 'bi bi-box-arrow-up-right');
}

function censuraEmail(email) {

	let nomeEmail = email.toString();
	let novoEmail = "";
	let cplEmail = "";

	for (let i = 0; i < nomeEmail.length; i++) {
		if (nomeEmail[i] !== "@") {
			novoEmail += nomeEmail[i];
		} else {
			for (let j = i; j < nomeEmail.length; j++) {
				cplEmail += nomeEmail[j];
			}
			break;
		}
	}

	nomeEmail = novoEmail;

	let tamanhoEmail = nomeEmail.length;
	let caracExcluir = Math.floor((tamanhoEmail * 50) / 100);

	for (let j = 1; j < (caracExcluir + 1); j++) {
		nomeEmail = nomeEmail.replace(nomeEmail[j], "*");
	}

	return email = nomeEmail + cplEmail;
}