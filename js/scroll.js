/*let btn = document.querySelector('.back-to-top')
//
// When scrolling, we run the function
window.onscroll = magic

function magic() {
	if (window.pageYOffset > 20) {
		btn.style.opacity = '1'
	} else {
		btn.style.opacity = '0'
	}
}
//
btn.onclick = function () {
	window.scrollTo(0, 0)
}*/

function backToTop() {
	let button = $('.back-to-top')
	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 50) {
			button.fadeIn()
		} else {
			button.fadeOut()
		}
	})
	button.on('click', e => {
		e.preventDefault()
		$('html').animate({ scrollTop: 0 }, 1000)
	})
}
backToTop()
