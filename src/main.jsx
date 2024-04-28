import React from 'react'//import la libreria de React desde React
import ReactDOM from 'react-dom/client' //importo el React dom desde React

import { RouterProvider } from 'react-router';//importo el enrutador desde react
import router from './routes';



//ReactDom crea un root enlazandose al div con id root del html que renderiza la versión estricta de React
//En el routerProvider paso una props -> router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
