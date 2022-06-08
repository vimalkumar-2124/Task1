//    5. Print the country which uses US Dollars as currency.

let currReq = new XMLHttpRequest()
var curr = document.getElementById("curr");
let usd = "USD"

currReq.onreadystatechange = function(){
    if (currReq.status === 200) {
        res = JSON.parse(this.responseText);
        res.forEach(val => {
            var c = `<tr>
                    <td>${val.name.common}</td>
                 </tr>`;
        curr.innerHTML += c;
        })
    }

}



currReq.open('GET',`https://restcountries.com/v3.1/currency/${usd}`)
currReq.send()
