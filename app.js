"use strict"
const mainbody = document.querySelector("#main");
const addbtn = document.querySelector("#addBtn");

// self calling function
(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()

addbtn.addEventListener('click', () => {
    addNote();
})
function saveNotes(){
    const notes=document.querySelectorAll(".note textarea");
     console.log(notes);
    const data=[];
    for(let i of notes)
    {
        data.push(i.value);
    }
    if(data.length===0)
    {
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
    console.log(data);
}
function addNote(text="") {
    const newNode=document.createElement("div");
    newNode.classList="note";
    const d = new Date();

    newNode.innerHTML=`<div class="tool">
    <label for="tool" class="rgt">${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}<br>${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}</label>
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`;
    newNode.querySelector(".trash").addEventListener("click",()=>{
        newNode.remove();
        saveNotes()
    });
    newNode.querySelector(".save").addEventListener("click",()=>{
        saveNotes();
    })
    newNode.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )
    mainbody.prepend(newNode);
}

