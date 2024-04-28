import React, { useState, useEffect } from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './CreatePatientForm.module.css';



function CreatePatientForm() {
    
  
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [historialClinico, setHistorialClinico] = useState('');




  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleHistorialClinicoChange = (event) => {
    setHistorialClinico(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agregar la lógica para enviar los datos del formulario alservidor para autenticación
    
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
          
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
</div>
<div>
    <div>
    <label htmlFor="surname">Apellido</label>
    </div>
          
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={handleSurnameChange}
            required
          />
</div>
<div>
    <div>
    <label htmlFor="email">Correo</label>
    </div>
          
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
</div>
<div>
    <div>
    <label htmlFor="historialClinico">Historial Clinico</label>
    </div>
          
          <input
            type="text"
            id="historialClinico"
            value={historialClinico}
            onChange={handleHistorialClinicoChange}
            required
          />
</div>

        <button type="submit" className={styles.button}>Añadir Paciente</button>
 

</form>
        </div>
        
       
        </>
    )}


export default CreatePatientForm;