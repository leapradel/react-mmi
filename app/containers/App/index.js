/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Toggle from '../../components/toggle.js';
import ReactDOM from 'react-dom';



// On peut aussi importer du CSS de la meme facon.
import '../../components/style.css';



export default function App() {
  return (
    <div>
    <Header/>
    <Machine number="1" isActive />
    <Toggle/>
    <Machine number="2"/>
    <Toggle/>
    <Machine number="3"/>
    <Toggle/>
    <Machine number="4" isActive/>
    <Toggle/>
    <Footer/>
    </div>
    
    
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
   
  );
}
