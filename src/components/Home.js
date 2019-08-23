import React,{Component} from "react";
import './../App.css';
import logo from '../assets/img/ramakrishna.jpg'; // Tell Webpack this JS file uses this image
import {
  Link
} from 'react-router-dom';

export default class Home extends Component{
    constructor(props) {
      super(props);
    }     
  
    render() {
      return (
          <div className="home-container">
            <div className="logo-container">
            {/* <h3 className="center-align">Home</h3> */}
                <img src={logo} alt="Logo" className="Logo"/>
            </div>
            <div className="home-content-container">
              <h2>Hi! I'm Ramakrishna.</h2>
              <p>I'm a UI and Mobile app developer.</p>
              <Link to={`/Contact`} >
                  <button className="contact-button" onClick={()=>this.props.handleToggleNavSelection({name:'Contact',selected:true})}>Contact Me</button>
              </Link>
            </div>
          </div>
      )
    }
  }