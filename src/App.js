import './App.css';
import { Component } from 'react';
import  Facebook  from '@material-ui/icons/Facebook';
import  Twitter  from '@material-ui/icons/Twitter';
import  LinkedIn  from '@material-ui/icons/LinkedIn';
import  GitHub  from '@material-ui/icons/GitHub';

import Home from './component/Home.js';
class App extends Component {
  render(){
    return (
      <div>
        <div className="container-funwithtriangles">
          <div className="background-funwithtriangles">
            <div style={{width:'-webkit-fill-available',position:'fixed'}}>
                <div className="menu__logoSpace"> 
                    <a href="/" className="menu__logo"> Creator Space </a>
                </div>
                <div className="menu__socialItems">
                  <a className="menu__socialLink" target="_blank" href='https://www.facebook.com/chanchal.panpaliya'> 
                    <span className="menu__socialIcon">
                      <Facebook  style={{color:'grey'}}/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <Twitter style={{color:'grey'}}/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                      <LinkedIn style={{color:'grey'}}/> 
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <GitHub style={{color:'grey'}}/>
                    </span>
                </a>
              </div>
            </div>
          </div>
          <div className="body-frame-funwithtriangles">
            <Home/>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
