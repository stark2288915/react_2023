import './App.css';
import {MainUsersComponent} from "./components/UsersComponent/MainUsersComponent";
import {MainCommentComponent} from "./components/CommentsComponent/MainCommentComponent";
import MainCarsComponent from "./components/CarsComponent/MainCarsComponent";
function App() {

    return (
    <div className="App">

        {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на */}
        {/*https://jsonplaceholder.typicode.com/users*/}

        {/*<MainUsersComponent/>*/}



        {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на */}
        {/*https://jsonplaceholder.typicode.com/comments*/}

        {/*<MainCommentComponent/>*/}




        {/*http://owu.linkpc.net/carsAPI/v1/doc
        Реалізувати створення, видалення та оновлення машин*/}

        <MainCarsComponent/>



    </div>
  );
}

export {App};
