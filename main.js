const toggle = document.querySelector(".toggle")
const listContainer  = document.querySelector(".listContainer")

toggle.addEventListener("click", ()=>{
    listContainer.classList.toggle("active")
})


// Quotes Generation here
const quoteGenerated = document.querySelector(".quostGenerated");
const generate = document.querySelector(".generate")


const API = "https://api.quotable.io/random"
fetch(API)
    .then((res) => res.json())
    .then((data) => {
        document.querySelector(".quoteGenerated").innerHTML = data.content;
        document.querySelector(".author").innerHTML = data.author;
    });

const getQuotes = () =>{
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
            document.querySelector(".quoteGenerated").innerHTML = data.content;
            document.querySelector(".author").innerHTML = data.author;
            console.log(data)
        });
} 
