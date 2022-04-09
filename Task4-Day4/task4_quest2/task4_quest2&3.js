
// 2. Use the rest countries API url -> https://restcountries.com/v3.1/all and display all the country flags in console
// 3.Use the same rest countries and print all countries name, region, sub region and population



let req = new XMLHttpRequest();

req.onreadystatechange = function(){
    if(req.status == 200){
        res = JSON.parse(this.responseText)
        res.forEach(element => {
            console.log(element.flag, element.name,element.region,element.subregion,element.population)
        });
        }
        
}


req.open('GET','https://restcountries.com/v3.1/all')


req.send();