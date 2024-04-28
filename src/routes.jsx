import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "./modules/Error"
import Header from"./modules/Header"
import App from "./App"
import Home from "./modules/Home"

const router= createBrowserRouter(
    [{
path:"/",
element:<Header/> ,
errorElement:<ErrorPage/>,
children:[
    {path:"/",  element:<App/>},
    {path:"/patients", element:<Home/>}
]}
// ,
// [{
// path:"/patients",
// element:<Header/>
// }]






])

export default router