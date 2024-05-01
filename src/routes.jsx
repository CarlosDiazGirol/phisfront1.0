import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "./modules/Error"
import Header from"./modules/Header"
import Patients from "./modules/Patients"
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
    {path:"/patients",  element:<Patients/>},
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/patient/create", element:<CreatePatientForm/>},
    {path:"/signup", element:<SignUp/>},
    {path:"/newpass", element:<NewPass/>}
]}
//  ,
//  [{
//  path:"/patient",
//  element:<Header/>,
//  children:[
//  {path:"/create", element:<CreatePatientForm/>},
//  ]
//  }]






])

export default router