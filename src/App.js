import './App.css';
import SompsonsComponentsMap from "./components/Simpsons/SompsonsComponentsMap";
import RickAndMortyComponentsMap from "./components/RickAndMorty/RickAndMortyComponentsMap";


function App() {
  return (
    <div className="App">
       <SompsonsComponentsMap/>
       <RickAndMortyComponentsMap/>
    </div>
  );
}

export {App};
