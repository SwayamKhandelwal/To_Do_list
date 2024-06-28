document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addTask();
  }
});

i=0;
function addTask() {
  i++;
  let work = document.querySelector("input");
  if(i>5){
    alert("Cannot add more than 5 tasks")
    work.value=""
  } else{

    
    let task = document.createElement("p");
    task.innerHTML = `${work.value} <button>remove</button>`;
    
    
    work.value = "";
    document.querySelector(".container").appendChild(task);
    
  }
}

document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    e.target.parentElement.remove();
  }
});

document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.tagName == "P") {
    e.target.classList.toggle("unlist");
    
  }
});

