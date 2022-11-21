import React from 'react';
import '../Stylesheet/styles/Home.css'
import { Canvas  } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <AnimateBox />
        <Html position={[-5, 3, 0]} >
          <h1 className="exerciseOneLink" onClick={handleClickLink}>-Exercise 1</h1>
        </Html>
      </Canvas>

      <Link to='/exercise1' id="Exercise1Link" style={{display: "none"}}> -Exercise1</Link>
    </div>
  );
};

const handleClickLink = () => {
  document.querySelector('#Exercise1Link').click();
}

const AnimateBox = () => {

  return (
    <mesh>
      <OrbitControls/>
      <meshLambertMaterial attach="material" color="blue" />
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};


export default Home;