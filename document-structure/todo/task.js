taskInput = document.querySelector('#task__input');
button = document.querySelector('#tasks__add');
tasksList = document.querySelector('#tasks__list');


function addTask(e) {
    e.preventDefault();
    if (!taskInput.value) return;

    tasksList.insertAdjacentHTML("beforeEnd", `<div class="task">
    <div class="task__title">`
        + taskInput.value +
        `</div>
    <a href="#" class="task__remove">&times;</a>
    </div> `);

    document.body.addEventListener('click', removeTask);

    taskInput.value = "";

}


function removeTask(e) {
    const target = e.target.closest('.task');
    if (!target) return;

    target.style = 'display: none';
}



button.addEventListener('click', addTask);


