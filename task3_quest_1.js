//1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

//JSON value took from JSONPlaceHolder site

let obj = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic comodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }]

//for loop
console.log("==============\n")
console.log("FOR LOOP")
console.log("\n==============\n")
for(let i=0;i<obj.length;i++){
      console.log(obj[i])
  }

//for in
console.log("\n==============\n")
console.log("FOR IN LOOP")
console.log("\n==============\n")
for(let i in obj){
    console.log(obj[i])
}

//for of 
console.log("\n==============\n")
console.log("FOR OF LOOP")
console.log("\n==============\n")
for(let i of obj){
    console.log(i)
}

//forEach loop
console.log("\n==============\n")
console.log("FOREACH LOOP")
console.log("\n==============\n")
obj.forEach(loop)

function loop(item){
    console.log(item)
}

