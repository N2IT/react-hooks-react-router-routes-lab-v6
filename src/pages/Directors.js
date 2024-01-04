import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {

  const [ directors, setDirectors ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  const directorList = directors.map((director) => {
    return <DirectorCard key={director.id} director={director} />
  })
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
      </main>
      <article>
        {directorList}
      </article>
    </>
  );
};

export default Directors;
