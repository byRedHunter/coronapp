const iconPlay = document.querySelector('#play')
const video = document.querySelector('#video')

iconPlay.addEventListener('click', () => {
	const videoPaused = video.paused

	if (videoPaused) {
		video.play()
	}
	video.setAttribute('controls', true)
	iconPlay.style.display = 'none'
})

const headerMenu = document.querySelector('.header-menu')
const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click', () => {
	headerMenu.classList.toggle('active')
})
