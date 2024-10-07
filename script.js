const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list_container');
const button = document.getElementById('addTask');


inputBox.addEventListener('keydown',(e)=>{
    if(e.key ==="Enter"){
        addTaskFunction();
    }

})


function addTaskFunction(){
    if(inputBox.value ===''){
        alert("You must enter some task first!");
        saveData();
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.getElementById('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();

    }
    inputBox.value = ""
    saveData();
}
button.addEventListener('click',addTaskFunction)

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("selected");
        saveData()
    }
    
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData()