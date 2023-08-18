"use strict"
const mainbody = document.querySelector("#main");
const addbtn = document.querySelector("#addBtn");



let index = 0;
addNote();
addbtn.addEventListener('click', () => {
    addNote();
})
function addNote() {
    mainbody.innerHTML += `<div class="note">
        <div class="tool">
            <i class="fas fa-save" id ="A${index}" ></i>
            <i class="fas fa-trash"></i>
        </div>
        <textarea></textarea>
    </div>`;
    let delBtn = document.querySelector(`#A${index}`);
    // console.log(delBtn);
    // console.log(typeof(delBtn));
 
     delBtn.addEventListener("click", () => {
    //     const note = document.querySelector(".note");
    //     note.remove();
        console.log("delete was clicked");
    })
    index++;

}