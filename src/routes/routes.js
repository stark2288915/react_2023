import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/users-page/UsersPage";
import UserDetailsPage from "../pages/user-details-page/UserDetailsPage";
import UserPostsPage from "../pages/user-details-page/UserPostsPage";

export const routes = createBrowserRouter([
    {path: '/',
        element: <UsersPage/>,
        loader: async () => {
            return await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
        }
    },
    {path: 'users/:id',
        element: <UserDetailsPage/>,
        loader: async (id) => {
            console.log(id.params.id)
            return await fetch(`https://jsonplaceholder.typicode.com/users/${id.params.id}`).then(value => value.json());
        },
        children:[
            {path: 'userposts', element: <UserPostsPage/>}
        ]
    }
])