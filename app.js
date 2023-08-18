"use strict"
const mainbody = document.querySelector("#main");
const addbtn = document.querySelector("#addBtn");

addNote();
addbtn.addEventListener('click', () => {
    addNote();
})
function addNote() {
    const newNode=document.createElement("div");
    newNode.classList="note";
    newNode.innerHTML=`<div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>`;
    newNode.querySelector(".trash").addEventListener("click",()=>{
        newNode.remove();
    });
    mainbody.prepend(newNode);

}