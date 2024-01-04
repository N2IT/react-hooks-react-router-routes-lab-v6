import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorsCard from "../components/ActorsCard";

function Actors() {

  const [actors, setAsActors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then(res => res.json())
      .then(data => setAsActors(data))
      .catch(error => console.error(error))
  })

  const actorsList = actors.map((actor) => {
    return <ActorsCard key={actor.id} actor={actor} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
      </main>
      <article>
        {actorsList}
      </article>
    </>
  );
};

export default Actors;
