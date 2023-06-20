var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
	if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
    	document.documentElement.classList.remove('transition')
    }, 1000) 
}



// THE COUNTER AND THE TEXT COLOR EFFECT ========================================================================
let count = 0;
const value = document.querySelector("#value");
const card = document.querySelector(".inner-card");

function decrease(){
    count--;
    value.textContent = count
};

function reset(){
    count = 0;
    value.textContent = count
};

function increase(){
    count++;
    value.textContent = count
};

// THE BORDER COLOR CHANGE AND MOUSE EFFECT =========================================================================
let button = document.querySelectorAll('.button')
button.forEach(buttons =>{
    buttons.addEventListener('click',()=>{
        if (count < 0 ) {
            value.style.color = "#fa211d"
            buttons.style.borderColor = '#fa211d'
            card.style.borderColor = '#fa211d'
        }else{
            value.style.color = "#07e75d"
            buttons. style.borderColor = '#07e75d'
            card. style.borderColor = '#07e75d'
        }
        
        if (count == 0) {
            value.style.color = "#111111"
            buttons.style.borderColor = '#fab027'
            card.style.borderColor = '#fab027'
    
        }
    
        buttons.addEventListener('mousedown',()=>{
            buttons.style.transform = "scale(0.7)"
        })
        buttons.addEventListener('mouseup',()=>{
            buttons.style.transform = "none"
        })
})
})


// SHOW COUNTER
const body = document.querySelector("body") 
const cardCount = document.querySelector(".card") 
const cardContainer = document.querySelector(".cardContainer") 
const begin = document.querySelector("#begin") 

begin.addEventListener("click", ()=> {
    body.classList.add("count")
})