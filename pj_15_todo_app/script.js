// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input[type='text']");
    const addBtn = document.getElementById("btn_add");

    // Create a container to list the tasks
    const taskList = document.createElement("div");
    taskList.id = "task_list";
    taskList.style.marginTop = "20px";
    document.getElementById("main").appendChild(taskList);

    addBtn.addEventListener("click", () => {
        const taskText = input.value.trim();

        if (taskText === "") {
            alert("Please write a task!");
            return;
        }

        // Create task container
        const taskItem = document.createElement("div");
        taskItem.className = "task_item";

        // Create task content
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskContent.className = "task_content";

        // Create edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit_btn";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete_btn";

        // Append to task item
        taskItem.appendChild(taskContent);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        // Clear input
        input.value = "";

        // Delete functionality
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        // Edit functionality
        editBtn.addEventListener("click", () => {
            if (editBtn.textContent === "Edit") {
                const newInput = document.createElement("input");
                newInput.type = "text";
                newInput.value = taskContent.textContent;
                taskItem.insertBefore(newInput, taskContent);
                taskItem.removeChild(taskContent);
                editBtn.textContent = "Save";
            } else {
                const updatedText = taskItem.querySelector("input").value;
                taskContent.textContent = updatedText;
                taskItem.insertBefore(taskContent, taskItem.querySelector("input"));
                taskItem.removeChild(taskItem.querySelector("input"));
                editBtn.textContent = "Edit";
            }
        });
    });
});
