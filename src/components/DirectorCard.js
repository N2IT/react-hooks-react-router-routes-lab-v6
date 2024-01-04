import {Link} from 'react-router-dom';

function DirectorCard ({ director }) {
  const { id, name, movies } = director
  
  return (
    <>
    <article>
        <h2>{name}</h2>
        <li>
            {movies}
        </li>
    </article>
    </>
  );
};

export default DirectorCard;