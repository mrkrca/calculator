const inputField = document.getElementById('input');
const insertNum = num => inputField.textContent += num

function equalTo(){
    if(inputField.textContent){
        inputField.textContent = eval(inputField.textContent)
    } else {
        false
    }
}

function eraseNum(){
    inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1)
}

function clearInput(){
    inputField.textContent = ''
}

