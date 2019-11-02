import React from 'react';

import './styles.css';

import logo from '../../assets/Shape.png';

function Header() {
  return (
    <header>
      <div>
        <img src={logo}/>
        <p>Meu Perfil</p>
      </div>
    </header>
  );
}

export default Header;