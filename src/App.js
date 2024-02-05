import './App.css';
import {LectionComponent} from "./components/LectionComponent/lectionComponent";
import {UserPostFormComponent} from "./components/UsersComponent/UserPostFormComponent";
import {MainUsersComponent} from "./components/UsersComponent/MainUsersComponent";
function App() {

    return (
    <div className="App">
        {/*<LectionComponent/>*/}
        <MainUsersComponent/>
    </div>
  );
}

export {App};
