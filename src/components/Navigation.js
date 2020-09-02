import React from 'react';
import { Link } from 'react-router-dom';


export function Navigation(){
  return (
          <div className="navigation">
            <Link to="/"><h1 id ="initials" onClick={lightsOff}>rc</h1></Link>
            <div className="navigation-sub">
              <Link to="/projects" className="item" onClick={lightsOff}>Projects</Link>
              <Link to="/articles" className="item" onClick={lightsOff}>Articles</Link>
              <Link to="/about" className="item" onClick={lightsOn}>About</Link>
              <a><i className="fab fa-github"></i></a>
            </div>
          </div>
    )
}


export function lightsOff(){
  document.querySelector('body').style.backgroundColor = '#12191C';
  document.querySelector('body').style.color = '#F9E7E7';
}

export function lightsOn(){
  document.querySelector('body').style.backgroundColor = '#F9E7E7';
  document.querySelector('body').style.color = '#12191C';
}
