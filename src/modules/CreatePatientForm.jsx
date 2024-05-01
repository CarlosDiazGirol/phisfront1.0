import React, { useState, useEffect } from 'react';//importo React, useState y useEffect
import styles from './CreatePatientForm.module.css'; //importo los estilos del formulario



function CreatePatientForm() {
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [historialClinico, setHistorialClinico] = useState('');
    const [res,setRes]=useState("");//Esto servirá para cambiar el estado de la respuesta 
    const payload= {name,surname,email,historialClinico}

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlApiCreate="http://localhost:3000/patient/create"
    // Agregar la lógica para enviar los datos del formulario alservidor para autenticación
    
    try {
        const response= await fetch(urlApiCreate,{
            method:"POST"  ,
             headers:{
                "content-type":"application/json"
        },
        body:JSON.stringify(payload),
    })
if (response.ok){
    const data = await response.json()
    console.log("Success", data)
    setRes("Success",data.name)
    setName("")//De esta forma limpio el imput después de enviarlo
} else {
  throw new Error("Something went wrong")
}
        
    } catch (error) {console.error("Error:",error)
        
    }
    console.log('Name:', name);
    console.log('Surname:', surname);
  };



    return(
        <>
        <div className={styles.form}>
            <div>
            <h2>Create Patient</h2>
            </div>
        
        
<form onSubmit={handleSubmit}>


<div>
    <div>
    <label htmlFor="name">Nombre</label>
    </div>
          
          <input type="text" id="name" value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Nombre" required
          />
</div>
<div>
    <div>
    <label htmlFor="surname">Apellido</label>
    </div>
          
          <input type="text" id="surname" value={surname}
            onChange={(e)=>setSurname(e.target.value)}
            placeholder="Apellido" required
          />
</div>
<div>
    <div>
    <label htmlFor="email">Correo</label>
    </div>
          
          <input type="email" id="email" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Mail" required
          />
</div>
<div>
    <div>
    <label htmlFor="historialClinico">Historial Clinico</label>
    </div>
          
          <input type="text" id="historialClinico" value={historialClinico}
            onChange={(e)=>setHistorialClinico(e.target.value)}
            placeholder="Historial Clinico" required
          />
</div>

        <button type="submit" className={styles.button}>Añadir Paciente</button>
 

</form>
        </div>
        <h2>{res} </h2>
       
        </>
    )}


export default CreatePatientForm;