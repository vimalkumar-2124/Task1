// Solving problems using array functions on rest countries data.

let req = new XMLHttpRequest();
var table = document.getElementById("table");
var popHtml = document.getElementById("pop");
var redpop = document.getElementById("redPop");
var asia = document.getElementById("asia");

req.onreadystatechange = function () {
  if (req.status === 200) {
    res = JSON.parse(this.responseText);

    //    1. Get all the countries from Asia continent /region using Filter function
    let countries = res.filter((val) => {
      if (val.continents == "Asia") {
        var a = `<tr>
                        <td>${val.name.common}</td>
                    </tr>`;
        asia.innerHTML += a;
      }
    });
    // console.log(countries)

    //    2. Get all the countries with a population of less than 2 lakhs using Filter function

    let pop = res.filter((val) => {
      if (val.population < 200000) {
        var p = `<tr>
                        <td>${val.name.common}</td>
                    </tr>`;
        popHtml.innerHTML += p;
      }
    });
    // console.log(pop)

    //    3. Print the following details name, capital, flag using forEach function

    res.forEach((val) => {
      var t = `<tr>
                        <td>${val.name.common}</td>
                        <td>${val.capital}</td>
                        <td>${val.flag}</td>
                    </tr>`;
      table.innerHTML += t;
      // console.log(val.name,val.capital,val.flag)
    });

    //    4. Print the total population of countries using reduce function

    let redPop = res.reduce((prev, curr) => {
      return prev + curr.population;
    }, 0);
    var r = `<tr>
                        <td>${redPop}</td>
                    </tr>`;
    redpop.innerHTML += r;
    // console.log(redPop)

  }
};
req.open("GET", "https://restcountries.com/v3.1/all");

req.send();

