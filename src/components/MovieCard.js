import {Link} from 'react-router-dom';

function MovieCard({ movie }) {
  const { title, id, time, genres } = movie
  
  return (
    <article>
        <h2>{title}</h2>
        <p>
          <Link to={`/movie/${id}`}>View Info</Link>
        </p>
    </article>
  );
};

export default MovieCard;