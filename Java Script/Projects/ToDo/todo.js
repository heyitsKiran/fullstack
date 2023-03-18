let addToDoButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function () {

    //creating a paragraph tag for tasks
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value

    toDoContainer.appendChild(paragraph) //assigning the typed value to appear in container

    inputField.value = "" //input box remain empty after creating a task

    //striking the finished tasks
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through'
    })

    //Deleting the completed tasks
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph)
    })
})

