
let btnAdd = document.querySelector('[name="btn"');
let tasks = document.querySelector(".tasks");
let tasksItems = document.querySelectorAll('.tasks li')
let tasksArr = [];

if (localStorage.getItem('tasks')) {
    //tasksArr = JSON.parse(localStorage.getItem('tasks')) || [];
    readData()
}

localStorage.tasks !== null ? tasksArr = JSON.parse(localStorage.tasks) : tasksArr = [];

function readData() {

    let data = '';
    tasksArr.map((task, index) => {
        data += `
        <li>
        <h5 class="task-name">${task}</h5>
        <button class="delete" onclick=btnDel(${index})>Delete</button>
        </li>
        `
    })
    tasks.innerHTML = data;
}

readData()



function btnDel(index) {
    tasksArr.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    readData();
}


btnAdd.onclick = function (e) {
    e.preventDefault();
    if (document.querySelector('form .input-task').value === '') {
       // console.log(document.querySelector('form .input-task').value);
        return false;
    } else {
        let input_task = document.querySelector('form .input-task').value;
        tasksArr.push(input_task);
        //console.log(tasksArr)
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
        readData();
        input_task.value = ''; 
    }
}

