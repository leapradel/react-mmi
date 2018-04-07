import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Map = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/machine1">Machine 1</Link>
        </li>
        <li>
          <Link to="/machine2">Machine 2</Link>
        </li>
        <li>
          <Link to="/machine3">Machine 3</Link>
        </li>
         <li>
          <Link to="/machine4">Machine 4</Link>
        </li>
      </ul>

      <hr />


      <Route exact path="/machine1" component={M1} />
      <Route path="/machine2" component={M2} />
      <Route path="/machine3" component={M3} />
      <Route path="/machine4" component={M4} />
    </div>
  </Router>
);

const M1 = () => (
  <div>
    <h2>Localisation de la machine 1</h2>
  </div>
);

const M2 = () => (
  <div>
    <h2>Localisation de la machine 2</h2>
  </div>
);

const M3 = () => (
 <div>
    <h2>Localisation de la machine 3</h2>
  </div>
);
const M4 = () => (
 <div>
    <h2>Localisation de la machine 4</h2>
  </div>
);


export default Map;