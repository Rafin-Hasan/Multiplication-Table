let input = document.querySelector('.input')
let button = document.querySelector('.button')
let result = document.querySelector('.result')

button.addEventListener('click' , ()=>{
    if(input.value == ""){
        alert('Toi ke valo hobe na😒')
    }else{
        for(let i = 1; i < 11 ; i++ ){
            result.innerHTML += input.value + " x " + i + ' = ' + input.value*i + '<br>'}
    }
})