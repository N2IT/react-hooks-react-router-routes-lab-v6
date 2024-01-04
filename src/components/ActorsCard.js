import {Link} from 'react-router-dom';

function ActorCard ({ actor }) {
  const { id, name, movies } = actor
  
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

export default ActorCard;