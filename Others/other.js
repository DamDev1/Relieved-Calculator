const toggle = document.querySelector(".toggle")
const listContainer  = document.querySelector(".listContainer")

toggle.addEventListener("click", ()=>{
    listContainer.classList.toggle("active")
})