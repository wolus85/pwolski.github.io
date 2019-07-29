class Task {
  constructor(taskInfo) {
    this.createDiv(taskInfo)
  }

  createDiv(taskInfo) {
    let taskBox = document.createElement("div")
    taskBox.classList.add("task_container")
    taskBox.innerText = ""

    let newDiv = document.createElement("div")
    newDiv.classList.add("single-task")
    newDiv.innerText = taskInfo

    newDiv.addEventListener("click", event => {
      event.target.style.textDecoration = "line-through"
    })

    document.querySelector(".single-task") &&
      document.querySelector(".single-task").addEventListener("click", evt => {
        console.warn("tadam", evt)
        evt.target.style.textDecoration = "line-through"
      })

    let removeTaskButton = document.createElement("button")
    removeTaskButton.classList.add("removeTask_button")
    removeTaskButton.innerText = "Remove"

    document.querySelector(".toDoList_container").appendChild(taskBox)
    taskBox.appendChild(newDiv)
    taskBox.appendChild(removeTaskButton)

    removeTaskButton.addEventListener("click", () => this.remove(taskBox))
  }

  remove(Task) {
    document.querySelector(".toDoList_container").removeChild(Task)
  }
}

function addTask() {
  if (document.querySelector(".input").value != "") {
    new Task(document.querySelector(".input").value)
    document.querySelector(".input").value = ""
  }
}

document.querySelector(".task_button").addEventListener("click", addTask)

document.querySelector(".toDoList_container").addEventListener("keydown", event => {
  if (event.which == 13) {
    addTask()
  }
})
