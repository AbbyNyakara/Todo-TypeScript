import React from 'react';
import './Title.scss';

const Title = () => {
  return (
    <div className="title">
      <h1 className='title__title-name'>Todo</h1>
      <div className="title__theme-switcher">
        <img src="/icon-sun.svg" alt="" />
      </div>
    </div>
  )
}

export default Title