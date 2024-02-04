import './App.css';
import {PostsComponent} from "./components/Posts/PostsComponent";
import {SpaceXesComponent} from "./components/SpaceXComponent/SpaceXesComponent";

function App() {


  return (
    <div className="App">
        <PostsComponent/>
        <SpaceXesComponent/>
    </div>
  );
}

export {App};
