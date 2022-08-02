function movie(movie) {
  if(movie == "deadpool") {
    window.location.href= "/movies/deadpool/"
  }
  if(movie == "cars") {
    window.location.href= "/movies/cars/"
  }
  if(movie == "cars2") {
    window.location.href= "/movies/cars2/"
  }
  if(movie == "hp1") {
    window.location.href= "/movies/hp1/"
  }
  if(movie == "hp2") {
    window.location.href= "/movies/hp2/"
  }
  if(movie == "hp3") {
    window.location.href= "/movies/hp3/"
  }
  if(movie == "mrg") {
    window.location.href= "/movies/mrg/"
  }
  else {
    console.log("ERROR: Movie Not Found Movie:" + movie)
  }
}