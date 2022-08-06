const textarea = document.getElementById('text-area')
const counter = document.getElementById('words-count')
const toRead = document.getElementById('to-read')
const displayPreview = document.getElementById('preview')

// Words & Characters count
textarea.addEventListener('input', (e) => {
    // console.log(e.target.value)
    let wordsCount = e.target.value
    counter.innerHTML = `<b>${wordsCount.split(" ").length}</b>
    words and 
    <b>${wordsCount.replace(/ /g,"").length}</b> characters`

    // In 1 min 250 words can be read
    toRead.innerHTML = `
    <b>${((1/250)*wordsCount.split(" ").length).toFixed(2)}</b> Minutes to read
    `
    // Preview text
    displayPreview.innerHTML = e.target.value
})

// Upper Case
const ucase = document.getElementById('ucase')
ucase.addEventListener('click', () => {
    textarea.innerHTML = ""
    let updateValue = textarea.value.toUpperCase()
    textarea.value = updateValue
    displayPreview.innerHTML = updateValue
})

// Lower Case
const lcase = document.getElementById('lcase')
lcase.addEventListener('click', () => {
    textarea.innerHTML = ""
    let updateValue = textarea.value.toLowerCase()
    textarea.value = updateValue
    displayPreview.innerHTML = updateValue
})

// Clear the textarea 
const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    textarea.value = ""
    displayPreview.innerHTML = ""
    counter.innerHTML = ""
    toRead.innerHTML = ""
}) 

// Copy text
// Navigator object contains the info about our browser
const copy = document.getElementById('copy')
function copyText() {
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
}

// Theme change
const navBarToggle = document.getElementById('navBarToggle')
const heading = document.getElementById('heading')
function changeTheme() {
    document.body.classList.toggle("bg-dark")
    navBarToggle.classList.toggle("navbar-dark")
    navBarToggle.classList.toggle("bg-dark")
    heading.classList.toggle('text-white')
    textarea.classList.toggle('bg-dark')
    textarea.classList.toggle('text-white')
    document.getElementById('card1').classList.toggle('bg-dark')
    document.getElementById('card1').classList.toggle('text-white')
    document.getElementById('card2').classList.toggle('bg-dark')
    document.getElementById('card2').classList.toggle('text-white')
}