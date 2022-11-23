const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmsByTitle = function () {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
}

Cinema.prototype.findByTitle = function (title_to_find) {
  const result = this.films.filter((film) => {
    return film.title === title_to_find;
  });
  return result[0];
}

// Cinema.prototype.filterByGenre = function (genre) {
//   const result = this.films.filter((film) => {
//     return film.genre === genre;
//   });
//   return result;
// }

Cinema.prototype.checkForYear = function (year) {
  const result = this.films.some((film) => {

    return film.year === year;

  })
  return result;
}
Cinema.prototype.checkForLength = function (length) {
  const result = this.films.every((film) => {
    return film.length > length

  })
  return result
}

Cinema.prototype.totalRuntime = function () {
  const total = this.films.reduce((runtimeTotal, film) => {
    return runtimeTotal + film.length;
  }, 0);
  return total;
  }

Cinema.prototype.filmsByProperty = function (property, toFind) {
  const result = this.films.filter((film) => {
    return film[property] === toFind;
  });
  return result;
}




module.exports = Cinema;
