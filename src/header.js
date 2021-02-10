import React, { useRef, useState, Suspense } from 'react';

const Header = () => {

  return (
    <div className="headerContainer">
      <div className="headerSpread">
        <div className="infinity">INFINITY</div>
        <div className="models">
          <div>TRIUMPH</div>
          <div>DATSUN</div>
          <div>PORSCHE</div>
        </div>
      </div>
    </div>
  )
}

export default Header;