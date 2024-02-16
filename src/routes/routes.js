import {createBrowserRouter} from "react-router-dom";
import MainUsersPage from "../pages/main-users-pages/MainUsersPage";
import {UserDetailsPage} from "../pages/user-details/UserDetailsPage";
import PostDetailsPage from "../pages/post-details/PostDetailsPage";
import {getUsers} from "../service.api/users.api.service"
import {PostsOfCurrentUserComponents} from "../components/UsersPostsComponents/PostsOfCurrentUserComponents";

export const routes = createBrowserRouter([
    {
        path: '/',
            element: <MainUsersPage/>,
            loader: async () => {
                return getUsers()
            },
            errorElement: 'errorUsersPage'
    },
    {
        path: 'user/:id',
            element: <UserDetailsPage/>,
            errorElement: 'errorUserDetailsPage',
            children: [
                {path: 'userposts', element: <PostsOfCurrentUserComponents/>}
            ]
    }
])