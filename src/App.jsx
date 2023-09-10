import { default as TopBar } from "./components/TopBar.jsx";
import { default as Card } from "./components/Card.jsx";
import './App.css'

//Data
import { default as AnimalData } from "./data/animalData.js";

function App() {
  const animalCards = AnimalData.map((animal) =>
      <Card
          key={animal.key}
          img={animal.img}
          location={animal.location}
          locationLink={animal.locationLink}
          title={animal.title}
          altNames={animal.altNames}
          description={animal.description}
      />
  );

  return (
    <>
      <TopBar />
      <main>
        <div className="card--container">
          {animalCards}
        </div>
      </main>
    </>
  )
}

export default App
