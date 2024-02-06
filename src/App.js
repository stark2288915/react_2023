import './App.css';
import {LectionComponent} from "./components/LectionComponent/lectionComponent";
import {UserPostFormComponent} from "./components/UsersComponent/UserPostFormComponent";
import {MainUsersComponent} from "./components/UsersComponent/MainUsersComponent";
import MainCommentComponent from "./components/CommentComponent/MainCommentComponent";
function App() {

    return (
    <div className="App">
        {/*<LectionComponent/>*/}
        {/*<MainUsersComponent/>*/}
        <MainCommentComponent/>
    </div>
  );
}

export {App};
