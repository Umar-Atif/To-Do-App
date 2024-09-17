var input = document.querySelector("#inputText");
var ol = document.querySelector("ol");
var array1 = [];

function print(){
    array1.push(input.value);
    ol.innerHTML = "";
    for (var i = 0; i < array1.length; i++){
        ol.innerHTML += `<li>${array1[i]} <button class="delete" onclick="deleteButton(${i})"><i class="fa-solid fa-trash-can"></i></button><button class="edit" onclick="editButton(${i})"><i class="fa-solid fa-pen-to-square"></i></button></li>`;
    }
    input.value = "";
}
function deleteButton(index){
    array1.splice(index , 1);
    ol.innerHTML = "";
    for(var i = 0; i < array1.length; i++){
    ol.innerHTML += `<li>${array1[i]} <button class="delete" onclick="deleteButton(${i})"><i class="fa-solid fa-trash-can"></i></button><button class="edit" onclick="editButton(${i})"><i class="fa-solid fa-pen-to-square"></i></button></li>`;
    }
}
function editButton(index){
    var editValue = prompt("Enter your updated value" , array1[index]);
    if(editValue !== null && editValue !== ""){
        array1[index] = editValue
        ol.innerHTML = "";
        for(var i = 0; i < array1.length; i++){
            ol.innerHTML += `<li>${array1[i]} <button class="delete" onclick="deleteButton(${i})"><i class="fa-solid fa-trash-can"></i></button><button class="edit" onclick="editButton(${i})"><i class="fa-solid fa-pen-to-square"></i></button></li>`;
            }
    }
}