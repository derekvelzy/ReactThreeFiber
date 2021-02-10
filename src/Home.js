import React, { useRef, useState, Suspense } from 'react';
import Triumph from './models/triumph.js';
import Datsun from './models/datsun.js';
import Porsche from './models/porsche.js';
import Header from './header.js';

const Home = () => {
  const triumph = useRef(null);
  const datsun = useRef(null);
  const porsche = useRef(null);
  const [page, setPage] = useState(0);
  const carousel = [triumph, datsun, porsche];

  const forward = () => {
    if (page === carousel.length - 1) {
      carousel[0].current.scrollIntoView({behavior: "smooth", block: "nearest"});
      setPage(0);
    } else {
      carousel[page + 1].current.scrollIntoView({behavior: "smooth", block: "nearest"});
      setPage(page + 1);
    }
  }

  const back = () => {
    if (page === 0) {
      carousel[carousel.length - 1].current.scrollIntoView({behavior: "smooth", block: "nearest"});
      setPage(carousel.length - 1);
    } else {
      carousel[page - 1].current.scrollIntoView({behavior: "smooth", block: "nearest"});
      setPage(page - 1);
    }
  }

  return (
    <div>
      <Header />
      <button className="back moveButton" onClick={back}>{'<'}</button>
      <button className="forward moveButton" onClick={forward}>{'>'}</button>
      <div style={{width: "300vw", display: "flex", marginTop: "10vh"}}>
        <div className="model" ref={triumph}><Triumph /></div>
        <div className="model" ref={datsun}><Datsun /></div>
        <div className="model" ref={porsche}><Porsche /></div>
      </div>
    </div>
  )
}

export default Home;