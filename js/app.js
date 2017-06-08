var userSubmit = document.querySelector('#user-submit');

function addToDo(event){
	event.preventDefault();

	var userInput = document.querySelector('#user-input');
	var toDoList = document.querySelector('#to-do-list');
		
	if (userInput.value === ''){
		return false; // will stop prevent the execution of code following
	}

		toDoList.innerHTML = '<li>' + userInput.value + '</li>' + toDoList.innerHTML;
		userInput.value = '';
}

userSubmit.addEventListener('click',addToDo, false);
