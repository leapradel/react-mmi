/**
 *
 * App.js
 *
 */
 
 //rajouter un bouton qui permet de changer l'état de notre machine : active ou non active
 //stocker les infos (nom et statut des machines) dans le state
 
 
import React from 'react';

class Machine extends React.Component {
    
     constructor(props) {
      super(props);
      
      this.state = {
         isActive: "Désactivé"
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({isActive: "Activé"})
   }
  render() {
    // Dans tous les cas, afficher
    return  (
    
    <div className="machine" className= { this.props.isActive ? "machine active" : "machine" }>
    
        { this.props.name } | { this.props.isActive }
        
         <button onClick = {this.updateState}>Changer de statut</button>
            <h4>{this.state.isActive}</h4>
            
    </div>
    
    );
  }

}
export default Machine;

// Le composant sera accessible avec le nom "Machine"
