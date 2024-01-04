import {Link} from 'react-router-dom';

function DirectorCard ({ director }) {
  const { id, name, movies } = director
  
  return (
    <>
    <article>
        <h2>{name}</h2>
        <ul>
            {movies}
        </ul>
    </article>
    </>
  );
};

export default DirectorCard;