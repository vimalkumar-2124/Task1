// API's
// "books": "https://www.anapioficeandfire.com/api/books",
// "characters": "https://www.anapioficeandfire.com/api/characters",
// "houses": "https://www.anapioficeandfire.com/api/houses"
const API = "https://www.anapioficeandfire.com/api/";
const accordion = document.querySelector(".accordion");
let id = 0;
let searchValue = document.querySelector(".searchTerm");
const notFound = document.querySelector(".notFound-content");

// To load content
async function loadContent() {
    try{
        const response = await fetch(`${API}/books`);
        const data = await response.json();
        data.forEach((book) => {
          showContent(book);
        });
    }
    catch(err){
        console.log(err.message)
    }
}


// Accordion to show books and details
function showContent(book) {
  id++;

  accordion.innerHTML += `<div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-${id}">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${id}" aria-expanded="false" aria-controls="collapse-${id}">
                                            <p class="book-name"><strong>${book.name}</strong> by ${book.authors[0]} (Author)</p>
                                        </button>
                                    </h2>
                                    <div id="collapse-${id}" class="accordion-collapse collapse" aria-labelledby="heading-${id}" data-bs-parent="#accordion">
                                        <div class="accordion-body">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <ul>
                                                        <li><strong>ISBN :  </strong>${book.isbn}</li>
                                                        <li><strong>Publisher :   </strong>${book.publisher}</li>
                                                        <li><strong>Released date :  </strong>${new Date(book.released).toDateString()}</li>
                                                        <li><strong>Number of Pages :  </strong>${book.numberOfPages}</li>
                                                    </ul>
                                                </div>
                                                <div class="characters col-sm-6">
                                                    <p id="characters"><strong>Characters :</strong></p>
                                                        <button id="show-${id}" class="btn btn-success bg-gradient" onclick=' showCharacters(${id})'>Show</button>
                                                        <ul class="character-list-${id}">
                                                        </ul>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> `;
}

// Characters generators
async function showCharacters(id) {
  // console.log(id)
  let btn = document.querySelector(`#show-${id}`);
  btn.setAttribute("style", "display:none;");
  let ul = document.querySelector(`.character-list-${id}`);
  try{
      const response = await fetch(`${API}/books/${id}`);
      const data = await response.json();
      // console.log(data)
      charactersResponse(data.characters, ul);
  }
  catch(err){
    console.log(err.message)
  }
}

async function charactersResponse(char, ul) {
  // console.log(char)
  try{

      let i = 0;
      let j = 0
      while (i < 5) {
       
        const li = document.createElement("li");
        const charResponse = await fetch(char[j]);
        const charData = await charResponse.json();
        if (charData.name !== "") {
        //   console.log(charData.name);
          li.innerText = charData.name;
          ul.append(li);
          i++;
        }
        j++
        
      }
  }
  catch(err){
    console.log(err.message)
  }
}


// Filter functionality
function search() {
  notFound.style.display = "none";
  let filterValue = searchValue.value.toUpperCase();
  let accordionItem = document.querySelectorAll(".accordion-item");
  let accordion_arr = Array.from(accordionItem);
  for (let i = 0; i < accordion_arr.length; i++) {
    let value = accordion_arr[i].innerText.toUpperCase();
    if (value.includes(filterValue)) {
      accordion_arr[i].style.display = "";
      accordion_arr[i].setAttribute("style", "border-radius:3px;");
    } else {
      accordion_arr[i].style.display = "none";
    }
    const checkDisplay = (ele) => ele.style.display === "none";
    if (accordion_arr.every(checkDisplay)) {
      notFound.style.display = "";
      notFound.innerHTML =
        "<p style='font-size:2em;text-align:center;color:white;'>No book found, please try again</p>";
    }
  }
}
loadContent();
