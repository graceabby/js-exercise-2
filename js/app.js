var userSubmit = document.querySelector('#user-submit');
var toDoList = document.querySelector('#to-do-list');

function addToDo(event){
	event.preventDefault();

	var userInput = document.querySelector('#user-input');
	
		
	if (userInput.value === ''){
		return false; // will stop prevent the execution of code following
	}

		toDoList.innerHTML = '<li><i class="fa fa-window-close close-to-do" aria-hidden="true"></i>' + userInput.value + '</li>' + toDoList.innerHTML;
		userInput.value = '';
}

function removeToDo(event) {
	if (event.target.classList.contains('close-to-do')) {
		var li = event.target.parentElement;
		toDoList.removeChild(li);
	}
}

toDoList.addEventListener('click', removeToDo, false);
userSubmit.addEventListener('click',addToDo, false);

// a function attached to an object is a method
//when you pass a function in another function a call back