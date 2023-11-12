import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Search from './Search';
import MainTag from './MainTag';
import NumResults from './NumResults';
import Box from './Box';
import MovieList from './MoveList';
import Loader from './Loader';

const KEY = '688c8027';

type Props = {
  message: string;
};

function ErrorMessage({ message }: Props) {
  return <p className="error">{message}</p>;
}

function App() {
  const [query, setQuery] = useState('inception');
  const [movies, setMovies] = useState([]);
  //  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState('');
  const tempQuery = 'interstallar';

  useEffect(
    function () {
      async function fethMovies() {
        try {
          setIsLoading(true);
          SetError('');

          const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${tempQuery}`);
          if (!response.ok) throw new Error('something went wrong');
          const data = await response.json();
          setMovies(data.Search);
          console.log(data.Search);
        } catch (err: any) {
          console.error(err.message);
          SetError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      // if (!query.length < 3) {
      //   setMovies([]);
      //   SetError('');
      //   return;
      // }
      fethMovies();
    },
    [query]
  );

  return (
    <div>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <MainTag>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>sddsf</Box>
      </MainTag>
    </div>
  );
}

export default App;
