import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' /**package json        $npm i bootstrap@5.3.0yar  =>   $yarn add bootstrap@5.3.0**/
import 'animate.css'                          /**package json      $npm install animate.css --save =>  $yarn add animate.css **/
import 'aos/dist/aos.css'                     /**package json       $ npm install aos --save => yarn add aos  */
import AOS from 'aos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
