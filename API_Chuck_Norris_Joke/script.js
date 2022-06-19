// http://www.icndb.com/api/
const joke_list = document.querySelector(".joke-list")
const url = "http://api.icndb.com/jokes"
const content = document.querySelector(".content")
const multiple_content = document.querySelector(".multiple-content")
const form = document.querySelector(".form")
const multiple_form = document.querySelector(".multiple-form")


function loadContent(){
    joke_list.innerHTML = ""
}

// To generate Random Joke from API
function generateJokes() {
    fetch(`${url}/random`)
        .then(response => response.json())
        .then(data => {
            joke_list.innerHTML = `<div class="joke-container col-sm-12">
                                            ${data.value.joke}
                                            </div>`
                })
}

// To toggle display between the content and form --> to get input from user and show result --> Then back to suggestion
function toggleDisplay(){
    content.style.display = content.style.display == "none" ? "flex" : "none"
    form.style.display = form.style.display == "flex" ? "none" : "flex"
    
}

// To toggle display between the content and form --> to get number from user and show result --> Then back to suggestion
function toggleDisplay_multiple(){
    multiple_content.style.display = multiple_content.style.display == "none" ? "flex" : "none"
    multiple_form.style.display = multiple_form.style.display == "flex" ? "none" : "flex"
}

// Generate joke with userName/AnyName
function usernameJokes(){
    let fname = document.querySelector("input[placeholder='firstname']").value
    let lname = document.querySelector("input[placeholder='lastname']").value
    fetch(`${url}/random?firstName=${fname}&lastName=${lname}`)
        .then(response => response.json())
        .then(data => {
            joke_list.innerHTML = `<div class="joke-container col-sm-12">
                                    ${data.value.joke}
                                    </div>`
                 })
    toggleDisplay() // Calling toggle display
    
}

// Generate multiple joke by passing number at the end of API
function multipleJokes(){
    let multiple_joke = document.querySelector("input[placeholder='Number']").value
    loadContent()
    fetch(`${url}/random/${multiple_joke}`)
        .then(response => response.json())
        .then(data => {
            data.value.forEach((jokes) => {
                joke_list.innerHTML += `<div class="joke-container col-sm-12">
                                        ${jokes.joke}
                                        </div>`

            })
        
        })
        toggleDisplay_multiple()

}

// Get total count of Jokes
function count(){
    fetch(`${url}/count`)
    .then((response) => response.json())
    .then( data => {
        joke_list.innerHTML = `<div class="joke-container col-sm-12">
                                        ${data.value}
                                        </div>`
    })
}
    