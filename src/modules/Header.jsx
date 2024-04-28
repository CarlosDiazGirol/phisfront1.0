import { Link, Outlet } from "react-router-dom" //outlet sirve para rendeerizar todos los hijos de las rutas

//Importantisimo el Outles si no lo pongo no me recargara varios componenetes a la vez, me recargará solo 1


function Header(){
return(
    <>
      <nav>
<p><Link to="/">Home</Link></p>
<p><Link to="/createpatient">Create Patient</Link></p>
<p><Link to="/patients">Patients</Link></p>
    </nav>
    <Outlet/>
    </>
  


)
}

export default Header