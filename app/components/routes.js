import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import Map from '../../components/map.js'
 
export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route exact path="/map" component={Map}/>
            </div>
        </Router>
    )
}