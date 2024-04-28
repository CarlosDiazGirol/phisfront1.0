import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "./modules/Error"
import Header from"./modules/Header"
import App from "./App"
import Home from "./modules/Home"
import Login from "./modules/Login"

const router= createBrowserRouter(
    [{
path:"/",
element:<Header/> ,
errorElement:<ErrorPage/>,
children:[
    {path:"/patients",  element:<App/>},
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>}
]}
// ,
// [{
// path:"/patients",
// element:<Header/>
// }]






])

export default router