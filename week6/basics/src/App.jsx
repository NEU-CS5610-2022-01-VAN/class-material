import "./App.css";
import Pet from "./Pet";
import { useState } from "react";
import { Picsum } from "picsum-photos";


const petsInitialState = [
  {
    id: 1,
    name: "Lukas",
    location: "Vancouver",
    age: 3,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 2,
    name: "Starfish",
    location: "Surrey",
    age: 5,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 3,
    name: "Garlfield",
    location: "Vancouver",
    age: 3,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 4,
    name: "Robin",
    location: "Richmond",
    age: 8,
    image: Picsum.url(),
    selected: false,
  },
];

function App() {
  const [pets, setPets] = useState(petsInitialState);

  function adoptPet(id) {
    const clonedPets = [...pets];
    const selectedPet = clonedPets.find((p) => p.id === id);
    selectedPet.selected = !selectedPet.selected;

    setPets(clonedPets);
  }

  return (
    <div className="App">
      <h1>Adop my Pets</h1>
      <div className="pets">
        {pets.map((p) => (
          <Pet
            key={p.id}
            id={p.id}
            name={p.name}
            age={p.age}
            location={p.location}
            selected={p.selected}
            image={p.image}
            adoptPet={adoptPet}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
