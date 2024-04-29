import React, { useState, useEffect } from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './NewPass.module.css';

function NewPass() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Agregar la lógica para enviar los datos del formulario al servidor para autenticación
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Contraseña:', password);
    };
  

return(
    <>
<div className={styles.form}>
    <h2>Change Your Passwoord</h2>

    

    <form onSubmit={handleSubmit}>

    <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
    </div>

    <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
    </div>
    <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
    </div>

    <button className={styles.signButton}>
        
            New Pass
    </button>
    <button type="submit" className={styles.button}>Iniciar sesión</button>
    </form>

</div>
    

    </>
)}

export default NewPass;