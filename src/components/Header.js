import React, { Component } from 'react';
import logo from './../images/kmit-logo-2366d0058f.svg';

class Header extends Component{
  render(){
    console.log(logo);
    return(
      <div className=" header-menu top-bar">
      <div className="top-bar-left desktop">
          <ul className="header-menu__list menu simple">
              <li> <img className="header-menu__nav--logo" src={logo} alt="bar logo"/></li>
              <li className="header-menu__item"><a className="header-menu__link" href="#vara-kunder"><span>Våra kunder</span></a></li>
              <li className="header-menu__item"><a className="header-menu__link" href="#om-oss"><span>Om oss</span></a></li>
              <li className="header-menu__item"><a className="header-menu__link" href="#filosofi"><span>Filosofi</span></a></li>
              <li className="header-menu__item"><a className="header-menu__link" href="#karriar"><span>Karriär</span></a></li>
              <li className="header-menu__item"><a className="header-menu__link" href="#miljo"><span>Kvalitet och miljö</span></a></li>
              <li className="header-menu__item"><a className="header-menu__link" href="#aktuellt"><span>Aktuellt</span></a></li>
              <li className="header-menu__item"><a className="header-menu__link" href="#kontakta-oss"><span>Kontakta oss</span></a></li>
          </ul>
      </div>
      </div>
    );
  }
}
export default Header;
