const toggle = document.querySelector(".toggle")
const listContainer  = document.querySelector(".listContainer")

toggle.addEventListener("click", ()=>{
    listContainer.classList.toggle("active")
})


// flame

const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");

const loverOne = document.querySelector(".nameOne");
const loverTwo = document.querySelector(".nameTwo")

const frameResult = document.querySelector(".frameResult")
const retry = document.querySelector(".retry")

calculate.addEventListener("click", () =>{
    let addBothInput;
    let commonValue;

    const nameOne = document.querySelector(".firstName").value;
    const nameTwo = document.querySelector(".secondName").value;
    loverOne.innerHTML = nameOne;
    loverTwo.innerHTML = nameTwo;


    if(nameOne === nameTwo){
        console.log("ok")
    }else{
        addBothInput = nameOne + nameTwo;
        const Myarr = addBothInput.split('');

        function removeDuplicate( arr){
            var discarded = [];
            var good = [];
            var test;
    
            while(test = arr.pop()){
                if(arr.indexOf( test ) > -1){
                    discarded.push( test );
                    continue;
                }else if( discarded.indexOf( test )) {
                    good.push( test );
                }
            }
            return good.reverse();
        }

        x = removeDuplicate( Myarr );
        console.log( x );

        if(x.length === 1 || x.length === 7 || x.length ===13 || x.length ===19 || x.length ===25){
            document.querySelector(".flame").innerHTML = "FRIENDSHIP"
            document.querySelector(".frameResult").style.display = "block"
            document.querySelector(".flameInput").style.display = "none"

        }else if(x.length === 2 || x.length === 8 || x.length === 14 || x.length === 20 || x.length === 26){    
            document.querySelector(".flame").innerHTML = "Lovers"
            document.querySelector(".frameResult").style.display = "block"
            document.querySelector(".flameInput").style.display = "none"

        }else if(x.length === 3|| x.length === 9|| x.length === 15|| x.length === 21|| x.length === 27){    
            document.querySelector(".flame").innerHTML = "Admirers"
            document.querySelector(".frameResult").style.display = "block"
            document.querySelector(".flameInput").style.display = "none"

        }else if(x.length === 4|| x.length === 10|| x.length === 16|| x.length === 22|| x.length === 28){    
            document.querySelector(".flame").innerHTML = "Marriage"
            document.querySelector(".frameResult").style.display = "block"
            document.querySelector(".flameInput").style.display = "none"

        }else if(x.length === 5|| x.length === 11|| x.length === 17|| x.length === 23|| x.length === 29){    
            document.querySelector(".flame").innerHTML = "Enemies"
            document.querySelector(".frameResult").style.display = "block"
            document.querySelector(".flameInput").style.display = "none"

        }else if(x.length === 6|| x.length === 12|| x.length === 18|| x.length === 24|| x.length === 30){    
            document.querySelector(".flame").innerHTML = "Siblings"
            document.querySelector(".frameResult").style.display = "block"
            document.querySelector(".flameInput").style.display = "none"
        }

    }
})

reset.addEventListener("click", () =>{
    document.querySelector(".firstName").value = "";
    document.querySelector(".secondName").value = "";
})

retry.addEventListener("click", () =>{
    document.querySelector(".firstName").value = "";
    document.querySelector(".secondName").value = "";
    document.querySelector(".frameResult").style.display = "none"
    document.querySelector(".flameInput").style.display = "block"
})
