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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [ 
      { name: "Machine 1",
        isActive: true
      },
      { name: "Machine 2",
        isActive: false
      },
     { name: "Machine 3",
        isActive: false
      },
     { name: "Machine 4",
        isActive: false
      }
       ]
    };
      console.log(this.state);
      console.log(Object.keys(this.state.machines));
  }

  
  render () {
    
    return (
      
      <div>
         <Header/>
         
      {this.state.machines.map(machine => 
        <Machine name={machine.name}
                  key={machine.key}
                isActive={machine.isActive}
        />
        
        )
      }
    <Footer/>
    </div>
      );
}

}
    
  export default App;
    
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
   
