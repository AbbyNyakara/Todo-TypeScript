import React, { useState } from 'react';
import './Header.scss';
import DesktopBackgroundDark from "/bg-desktop-dark.jpg";
import DesktopBackgroundLight from '/bg-desktop-light.jpg';

const Header: React.FC = () => {

  const [mode, setMode] = useState(true);
  const themeHandler = () => {
    setMode(prevState => !prevState);
  };

  return (
    <div className="header" onClick={themeHandler}>
      <img src={mode ? DesktopBackgroundDark : DesktopBackgroundLight} alt="" className="header__image" />
    </div>
  )
}

export default Header