var ul = document.getElementById("taskcontainer");
var input = document.getElementById("input");

function addTask(){
    var listitem = document.createElement("li");
    listitem.innerHTML = input.value + 
        " <button onclick='deleteTask(event)'>DELETE</button>" + 
        " <button class='edit' onclick='editTask(event)'>EDIT</button>";
    ul.append(listitem);
    input.value = "";
}

function deleteTask(event) {
    event.target.parentElement.remove();
}

function editTask(event){
    var listitem = event.target.parentElement;
    var currentText = listitem.firstChild.textContent;
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = currentText;
    listitem.innerHTML = "";
    listitem.appendChild(newInput);

    var saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.onclick = function(){
        var newText = newInput.value;
        listitem.innerHTML = newText + 
            " <button onclick='deleteTask(event)'>DELETE</button>" + 
            " <button class='edit' onclick='editTask(event)'>EDIT</button>";
    };

    listitem.appendChild(saveButton);
}
