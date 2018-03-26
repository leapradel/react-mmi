/**
 *
 * App.js
 *
 */
 
 
 
 
 //rajouter un bouton qui permet de changer l'état de notre machine : active ou non active
 //stocker les infos (nom et statut des machines) dans le state
 
 
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return  <div className="machine"
    className= { this.props.isActive ? "machine active" : "machine" }> Machine { this.props.number } | { this.props.isActive }</div>
  }

}
export default Machine;

// Le composant sera accessible avec le nom "Machine"
