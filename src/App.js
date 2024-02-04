import './App.css';
import {PostsComponent} from "./components/Posts/PostsComponent";
import {SpaceXesComponent} from "./components/SpaceXComponent/SpaceXesComponent";

function App() {


  return (
    <div className="App">

        {/*з jsonplaceholder отримати всі пости в компоненту Posts.js
        відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
        Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}

        <PostsComponent/>


      {/*  є API от SpaceX
        https://api.spacexdata.com/v3/launches/
        потрібно вивести всі запуски кораблів окрім 2020 року
        репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}
        <SpaceXesComponent/>
    </div>
  );
}

export {App};
