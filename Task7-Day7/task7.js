// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie {
  constructor(title) {
    this.title = title.title;
    this.studio = title.studio;
    this.rating = title.rating;
  }
  getPG() {
    if (this.rating == "PG") {
      return this.title;
    }
  }
}
let movie = [
  {
    title: "Casino Royale",
    studio: "Eon Production",
    rating: "PG13",
  },
  {
    title: "Casino",
    studio: "Eon Production",
    rating: "PG",
  },
  {
    title: "Resident Evil",
    studio: "Sony",
    rating: "PG18",
  },
  {
    title: "Avengers",
    studio: "Marvel",
    rating: "PG",
  },
];
arr = [];
for (let i = 0; i < movie.length; i++) {
  m = new Movie(movie[i]);
  if (m.getPG()) {
    arr.push(m.getPG());
  }
}
console.log(arr);

// 2.Write a “person” class to hold all the details.

class Person{
    constructor(person)
    {
    this.name =person.name
    this.age = person.age
    this.ph = person.ph
    }
getDetail(){
    return this.name
}
}
let a ={
  name:'vimal',
  age:24,
  ph : '8940506941'
}

var p = new Person(a)
console.log(p.getDetail())