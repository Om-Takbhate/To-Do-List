const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list_container');
const button = document.getElementById('addTask');

// Trigger add task function on Enter key press
inputBox.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addTaskFunction();
    }
});

// Add new task to the list
function addTaskFunction() {
    if (inputBox.value === '') {
        alert("You must enter some task first!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        saveData();
    }
    inputBox.value = "";  // Clear input box
    saveData();
}

// Add task via button click
button.addEventListener('click', addTaskFunction);

// Remove task from the list on clicking the task (LI)
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();  // Remove the clicked list item
        saveData();
    }
});

// Save the task list in localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Retrieve tasks from localStorage and display them on page load
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
    
    // No need for extra event listeners since removing is handled by parent `listContainer`
}

// Load the task list from localStorage on page load
showData();
