import React, { useRef, useState, Suspense } from 'react';
import Yamaha from './models/yamaha.js';
import Triumph from './models/triumph.js';
import Datsun from './models/datsun.js';
import Porsche from './models/porsche.js';
import Header from './header.js';

const Home = () => {
  const yamaha = useRef(null);
  const triumph = useRef(null);
  const datsun = useRef(null);
  const porsche = useRef(null);
  const [page, setPage] = useState(0);
  const carousel = [yamaha, triumph, datsun, porsche];

  const set = (index) => {
    carousel[index].current.scrollIntoView({behavior: "smooth", block: "nearest"});
    setPage(index);
  }

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
      <Header set={set} />
      <button className="back moveButton" onClick={back}>{'<'}</button>
      <button className="forward moveButton" onClick={forward}>{'>'}</button>
      <div style={{width: "400vw", display: "flex", marginTop: "10vh"}}>
        <div className="model" ref={yamaha}>
          <div className="make">Yamaha</div>
          <Yamaha />
          <div className="mod">MT-09</div>
        </div>
        <div className="model" ref={triumph}>
          <div className="make">Triumph</div>
          <Triumph />
          <div className="mod">Bonneville</div>
        </div>
        <div className="model" ref={datsun}>
          <div className="make">Datsun</div>
          <Datsun />
          <div className="mod">240K-GT</div>
        </div>
        <div className="model" ref={porsche}>
          <div className="make">Porsche</div>
          <Porsche />
          <div className="mod">911 930 Turbo</div>
        </div>
      </div>
    </div>
  )
}

export default Home;