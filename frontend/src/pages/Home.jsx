import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div >
    <h1>hello</h1>
   <Link to="/menu">see menu</Link>
   <br></br>
   <Link to="/complaint">complaint</Link>
    </div>
  );
};

export default Home
