import { Component } from "react";
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 

//css
import '../css/Home_triangle.css';

import Quiz from './Pages/Quiz.js';
import ISTriangle from './Pages/IsTriangle.js';
import Hypotenuse from './Pages/Hypotenuse.js';
import AreaOfTriangle from './Pages/AreaOfTriangle';

class Home extends Component{
    render(){
        return(
            <div className="funtriangle-container">
            <BrowserRouter>
           <div className="nav-funtriangle-header-container">
                <div className="nav-funtriangle-header">
                     <span className="nav-funtriangle-header-title"> Fun With Triangles </span> 
                     <span className="nav-funtriangle-header-link-container"> 
                        <ul className="nav-funtriangle-header-link">
                            <li className="nav-funtriangle-header-link-name"> 
                                <Link to="/istriangle" className="nav-funtriangle-header-link-page"> ISTriangle? </Link> 
                            </li>
                            <li className="nav-funtriangle-header-link-name"> 
                                <Link to="/" className="nav-funtriangle-header-link-page"> Quiz </Link> 
                            </li> 
                            <li className="nav-funtriangle-header-link-name"> 
                                <Link to="/hypotenuse" className="nav-funtriangle-header-link-page"> Hypotenuse </Link> 
                            </li> 
                            <li className="nav-funtriangle-header-link-name"> 
                                <Link to="/areaoftriangle" className="nav-funtriangle-header-link-page"> Area Of Triangle </Link> 
                            </li> 
                        </ul>
                     </span>  
                </div>
           </div> 
           <div>
           <Switch>
                <Route exact path="/" component={Quiz}/>
                <Route path="/istriangle" component={ISTriangle}/>
                <Route path="/hypotenuse" component={Hypotenuse}/>
                <Route path="/areaoftriangle" component={AreaOfTriangle}/>
            </Switch> 
            </div>
           </BrowserRouter>
        </div>
        )
    }
}

export default Home;