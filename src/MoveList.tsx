function Movie({ movie }: any) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>Calen</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieList({ movies }: any) {
  return (
    <ul className="list">{movies?.map((movie) => <Movie movie={movie} key={movie.imdbID} />)}</ul>
  );
}

export default MovieList;
