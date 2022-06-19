
//https://restcountries.com/v3.1/all
let flex_container = document.querySelector("#flex-container")
let filter_container = document.querySelector("#filter-container")
let API = "https://restcountries.com/v3.1/"
let search = document.querySelector("#search-input")
const notFound = document.querySelector(".notfound-content");


// Fetching datas from API
fetch(`${API}/all`)
    .then(response => response.json())
    .then(countries => {
        
        countries.map((country) => {
            
            // Some of the datas are having undefined while trying to fetch the datas by using Object.keys or .values.
            // To fix that issue below conditions used
            if(country.currencies === undefined || country.languages === undefined){
                flex_container.innerHTML += `<div class="flip-card">
                                                <div class="flip-card-inner">
                                                    <div class="flip-card-front">
                                                        <div class="card">
                                                            <img class="card-img-top" src="${country.flags.svg}" alt="${country.name.common}">
                                                            <div class="card-body">
                                                                <h3 class="card-text">${country.name.common}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div class="flip-card-back">
                                                    <p class="pt-2">Region : ${country.region}</p>
                                                    <p>Capital : ${country.capital}</p>
                                                    
                                                    <p>Population : ${country.population}</p>
                                                </div>
                                                </div>
                                            </div>`
            }
            else{
    
                flex_container.innerHTML += `<div class="flip-card">
                                                    <div class="flip-card-inner">
                                                        <div class="flip-card-front">
                                                            <div class="card">
                                                                <img class="card-img-top" src="${country.flags.svg}" alt="${country.name.common}">
                                                                <div class="card-body">
                                                                    <h3 class="card-text">${country.name.common}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <div class="flip-card-back">
                                                        <p class="pt-2">Region : ${country.region}</p>
                                                        <p>Capital : ${country.capital}</p>
                                                        <p>Currencies :<br/>
                                                         Name = ${Object.keys(country.currencies)}</p>
                                                         <p>Language : ${Object.values(country.languages)}</p>
                                                        <p>Population : ${country.population}</p>
                                                    </div>
                                                    </div>
                                                </div>`
                
            }
                                        
        })
        
        
    })

   

// Filter country  
function searchCountry() {
    notFound.style.display = "none";
    let filterValue = search.value.toUpperCase()
    let flip_card = document.querySelectorAll(".flip-card")
    let flipCardArr = Array.from(flip_card)
    for(let i = 0; i < flipCardArr.length; i++){
        let value = flipCardArr[i].innerText.toUpperCase()
        if(value.includes(filterValue)){
            flipCardArr[i].style.display = ""
        }
        else{
            flipCardArr[i].style.display = "none"
        }
        const checkDisplay = (ele) => ele.style.display === "none";
        if (flipCardArr.every(checkDisplay)) {
            notFound.style.display = "";
            notFound.innerHTML =
                "<p style='font-size:2em;text-align:center;color:white;'>No Country found, please try again</p>";
        }
    }
}      
            
        
    



   