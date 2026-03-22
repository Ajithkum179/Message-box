const textarea = document.getElementById("message")
const counter = document.getElementById("counter")
const remaining = document.getElementById("remaining")
const warning = document.getElementById("warning")

const max = 200

textarea.addEventListener("input", () => {

let length = textarea.value.length

if(length > max){

textarea.value = textarea.value.substring(0, max)
length = max

warning.textContent = "Character limit reached!"

}else{

warning.textContent = ""

}

counter.textContent = length + " / " + max + " characters"

remaining.textContent = (max - length) + " remaining"

})