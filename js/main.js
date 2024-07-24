
class User {
	#login;
	#password;
	constructor (login, password, remember){
		this.#login = login;
		this.#password = password;
		this.remember = remember;
	}

	get log (){
		return this.#login;
	}
	set log (newLog){
		this.#login = newLog;
	}

	get pas (){
		return this.#login;
	}
	set pas (newPas){
		this.#password = newPas;
	}

	getRemember(){
		return this.remember;
	}
}

const form = document.querySelector('.form');

const inputLog = document.querySelector('.login-form');
const inputPas = document.querySelector('.password');

inputLog.value = sessionStorage.getItem("log");
inputPas.value = sessionStorage.getItem("pas");

inputLog.addEventListener('input', (evt) => {
	sessionStorage.setItem("log", evt.target.value);
})

inputLog.addEventListener('input', (evt) => {
	sessionStorage.setItem("pas", evt.target.value);
})


form.addEventListener('submit', setInfo);

function setInfo (event){
	event.preventDefault();

	const info = event.target.elements;

	const log = info.userLogin.value;
	const pas = info.userPassword.value;
	const check = !info.userRemember.value

const testUser = new User (log, pas, check);
console.log(testUser) 

sessionStorage.removeItem("log");
sessionStorage.removeItem("pas");
}

