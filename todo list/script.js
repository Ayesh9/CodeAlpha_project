function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    // Mark as priority 1 if the user types "priority" keyword
    if (taskText.toLowerCase().startsWith("priority")) {
      li.classList.add("priority");
      li.textContent = "🔥 " + taskText;
    } else {
      li.textContent = taskText;
    }
  
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
  function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    if (taskText.toLowerCase().startsWith("priority")) {
      li.classList.add("priority");
      li.textContent = "🔥 " + taskText;
    } else {
      li.textContent = taskText;
    }
  
    
    li.addEventListener("click", function () {
      li.classList.add("completed");
      setTimeout(() => li.remove(), 300); // Remove after fade-out animation
    });
  
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
    