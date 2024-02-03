const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
//const taskTitle = document.getElementById("task-title");

//Counter Variable
let taskIndex = 1;
//console.log(taskForm, taskList);

taskForm.addEventListener("submit", function(event){
  event.preventDefault();
  
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  //const TitleInput = document.getElementById("title-input");
  //const titleText = document.value.trim();
 
  //console.log(taskText);
  if (taskText !==""){
    //create a new task item

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.textContent = `${taskIndex}- ${taskText}`;
    taskItem.textContent = taskText;
   
    taskItem.addEventListener("click", function (){
      console.log("completed");
      this.classList.toggle("completed");
    })
    //append the task item to the task list
    taskList.appendChild(taskItem);


    //increament the ask index
    taskIndex++;

    taskInput.value = "";
    
  }
  if (taskText !==""){
    const taskTitleItem = document.createElement("li");
    taskTitleItem.classList.add("title-item");
    //taskTitleItem.textcontent = ${`titletext`};
    taskTitleItem.textcontent = titletext;
  }
  });