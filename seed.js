const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const { User } = require("./models/user");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    firstname: "Rahul",
    lastname: "Thokal",
    email : "rahulthokal90@gmail.com",
    password : "Supp0rt#123",
    isAdmin : true
  },
  {
    firstname: "sachin",
    lastname: "tak",
    email : "psngsra@gmail.com",
    password : "Supp0rt#123",
    isAdmin : true
  }
  // {
  //   name: "Action",
  //   movies: [
  //     { title: "Die Hard", numberInStock: 5, dailyRentalRate: 2 },
  //     { title: "Terminator", numberInStock: 10, dailyRentalRate: 2 },
  //     { title: "The Avengers", numberInStock: 15, dailyRentalRate: 2 }
  //   ]
  // },
  // {
  //   name: "Romance",
  //   movies: [
  //     { title: "The Notebook", numberInStock: 5, dailyRentalRate: 2 },
  //     { title: "When Harry Met Sally", numberInStock: 10, dailyRentalRate: 2 },
  //     { title: "Pretty Woman", numberInStock: 15, dailyRentalRate: 2 }
  //   ]
  // },
  // {
  //   name: "Thriller",
  //   movies: [
  //     { title: "The Sixth Sense", numberInStock: 5, dailyRentalRate: 2 },
  //     { title: "Gone Girl", numberInStock: 10, dailyRentalRate: 2 },
  //     { title: "The Others", numberInStock: 15, dailyRentalRate: 2 }
  //   ]
  // }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Movie.deleteMany({});
  await Genre.deleteMany({});
  await User.deleteMany({});

  for (let genre of data) {
    await new User({ 
      firstname: genre.firstname,
      lastname: genre.lastname,
      email: genre.email,
      password: genre.password,
      isAdmin: genre.isAdmin
     }).save();
    // const movies = genre.movies.map(movie => ({
    //   ...movie,
    //   genre: { _id: genreId, name: genre.name }
    // }));
    // await Movie.insertMany(movies);
  }
  // for (let user of data) {
  //   const { _id: genreId } = await new Genre({ name: genre.name }).save();
  //   const movies = genre.movies.map(movie => ({
  //     ...movie,
  //     genre: { _id: genreId, name: genre.name }
  //   }));
  //   await Movie.insertMany(movies);
  // }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
