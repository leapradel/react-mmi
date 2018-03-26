
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Active'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({data: 'Non active'})
   }
   render() {
      return (
         <div>
            <button onClick = {this.updateState}>Changer de statut</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;