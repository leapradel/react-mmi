/**
 *
 * App.js
 *
 */
 
 //rajouter un bouton qui permet de changer l'état de notre machine : active ou non active
 //stocker les infos (nom et statut des machines) dans le state
 
 
import React from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch'

class Machine extends React.Component {
    
     constructor(props) {
      super(props);
         this.state = {
      switched: false
    };
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };
 
  render() {
    // Dans tous les cas, afficher
    return  (
    
    <div className="machine" className= { this.state.isActive ? "machine active" : "machine" }>
    
        { this.props.name }  { this.props.isActive }
        <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
        <h4>{ this.state.switched ? "Activée" : "Désactivée" }</h4>
    </div>
    
    );
  }

}
export default Machine;

// Le composant sera accessible avec le nom "Machine"
