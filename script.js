
document.querySelectorAll("input").forEach(element => {
    setupInput(element)
});


function setupInput(input){
    input.addEventListener('invalid', e => e.preventDefault())
    input.addEventListener('keyup', () => {
        if(!input.validity.valid && !input.validity.valueMissing){
            return input.classList.add('invalid')
        }
        input.classList.remove("invalid")
    })
}

function trySubmit(){
    var form = document.querySelector('form')
    var inputArray = form.querySelectorAll('input')
    inputArray.forEach(input => {
        if(!input.validity.valid){
            input.classList.add('invalid')
        }
    })
}