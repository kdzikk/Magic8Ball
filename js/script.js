const input = document.querySelector('input')
const img = document.querySelector('img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = [
	'Tak.',
	'Nie.',
	'Może',
	'Ciężko powiedzieć',
	'Nie chce znać odpowiedzi na to pytanie..',
]

const shakeBall = () => {
	img.classList.add('shake-animation')
	setTimeout(checkInput, 1000)

}
const checkInput = () => {
	img.classList.remove('shake-animation')
	if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
		answer.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else {
		error.textContent = 'Wprowadź pytanie'
		answer.textContent = ''
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	console.log(number)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

img.addEventListener('click', shakeBall)
