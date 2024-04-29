import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "./modules/Error"
import Header from"./modules/Header"
import App from "./App"
import Home from "./modules/Home"
import Login from "./modules/Login"
import CreatePatientForm from "./modules/CreatePatientForm"
import SignUp from "./modules/SignUp"
import NewPass from "./modules/NewPass"

const router= createBrowserRouter(
    [{
path:"/",
element:<Header/> ,
errorElement:<ErrorPage/>,
children:[
    {path:"/patients",  element:<App/>},
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/createpatient", element:<CreatePatientForm/>},
    {path:"/signup", element:<SignUp/>},
    {path:"/newpass", element:<NewPass/>}
]}
// ,
// [{
// path:"/patients",
// element:<Header/>
// }]






])

export default router