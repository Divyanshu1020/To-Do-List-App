window.addEventListener('load', () => {
	const form = document.querySelector("#new-task");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
    const time = document.querySelector(".time")

    
    const tiem = new Date()

    time.textContent = 


	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const task = input.value;
        if(!task){
            alert("Please fill out the task")
            return;
        }
		const taskEl = document.createElement("div");
        taskEl.classList.add("task")
        const contentEl = document.createElement("div");
        contentEl.classList.add("content")

        taskEl.appendChild(contentEl);

        const inputEl = document.createElement("input");
        inputEl.classList.add("text")
        inputEl.type="text"
        inputEl.value=task
        inputEl.setAttribute("readonly","readonly")

        const actionEl = document.createElement("div");
        actionEl.classList.add("actions")

        const editButtonEl = document.createElement("button")
        editButtonEl.classList.add("edit")
        editButtonEl.textContent = "Edit"
        const deleteButtonEl = document.createElement("button")
        deleteButtonEl.classList.add("delete")
        deleteButtonEl.textContent = "Delete"

        actionEl.appendChild(editButtonEl)
        actionEl.appendChild(deleteButtonEl)

        taskEl.appendChild(actionEl)


        contentEl.appendChild(inputEl);
        list_el.appendChild(taskEl)

        input.value = "";

        editButtonEl.addEventListener("click",function(){
            if(editButtonEl.textContent=== "Edit"){
                editButtonEl.textContent = "Save"
                inputEl.focus();
                inputEl.removeAttribute("readonly")
            }
            else{
                editButtonEl.textContent = "Edit"
                inputEl.setAttribute("readonly","readonly")
            }
        })

        deleteButtonEl.addEventListener('click',function(){
            list_el.removeChild(taskEl);
        })

	});



});