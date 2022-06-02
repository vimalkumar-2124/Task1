let form = document.getElementById("form");
let table = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

const submit = () => {
  let fname = document.getElementById("first-name").value;
  let lname = document.getElementById("last-name").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let address = document.getElementById("address").value;
  let country = document.getElementById("inputCountry").value;
  let state = document.getElementById("inputState").value;
  let pincode = document.getElementById("pincode").value;
  let food = document.querySelectorAll('input[name="food_choice"]:checked');
  form.style.display = "none";
  document.getElementsByClassName("table")[0].removeAttribute("style")
//   $(".table").removeAttr("style");

  let food_arr = [];
  for (let i of food) {
    food_arr.push(i.value);
  }

  //Show form datas in the table format
  table.innerHTML = `<tr>
                                <td>${fname}</td>
                                <td>${lname}</td>
                                <td>${gender}</td>
                                <td>${country}</td>
                                <td>${state}</td>
                                <td>${address}</td>
                                <td>${pincode}</td>
                                <td>${food_arr}</td>
                                `;


// JQuery syntax below:
//   $("#result").append(`<tr>
//                                 <td>${fname}</td>
//                                 <td>${lname}</td>
//                                 <td>${gender}</td>
//                                 <td>${country}</td>
//                                 <td>${state}</td>
//                                 <td>${address}</td>
//                                 <td>${pincode}</td>
//                                 <td>${food_arr}</td>
//                                 `);

};

//Validate only two values have to be choose from the checkbox input type
function validateCheckbox() {
  let checkboxes = document.getElementsByName("food_choice");
  let checkedItems = 0;
  for (let i in checkboxes) {
    if (checkboxes[i].checked) {
      checkedItems++;
    }
  }
  if (checkedItems > 2) {
    alert("You can't select more than two choice of foods!");
    return false;
  }
}