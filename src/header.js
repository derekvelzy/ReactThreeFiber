import React, { useRef, useState, Suspense } from 'react';

const Header = ({set}) => {

  return (
    <div className="headerContainer">
      <div className="headerSpread">
        <div className="infinity">INFINITY</div>
        <div className="models">
          <div className="headerButton" onClick={() => set(0)}>YAMAHA</div>
          <div className="headerButton" onClick={() => set(1)}>TRIUMPH</div>
          <div className="headerButton" onClick={() => set(2)}>DATSUN</div>
          <div className="headerButton" onClick={() => set(3)}>PORSCHE</div>
        </div>
      </div>
    </div>
  )
}

export default Header;