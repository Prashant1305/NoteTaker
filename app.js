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
            <i class="fas fa-save"></i>
            <i class="fas fa-trash"></i>
        </div>
        <textarea></textarea>
    </div>`;
    // const delBtn = document.querySelector(".fa-trash");
    // console.log(delBtn);
    // delBtn.addEventListener("click", () => {
    //     const note = document.querySelector(".note");
    //     note.remove();
    // })
    index++;

}