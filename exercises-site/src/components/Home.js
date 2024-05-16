import React from 'react';
import '../Stylesheet/styles/Home.css'
import { Canvas  } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EllipticalRotation } from './ElipticalRotation.js';


const AnimateBox = () => {

  return (
    <mesh>
      <OrbitControls/>
      <meshLambertMaterial attach="material" color="blue" />
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};

const Home = () => {

  return (
    <div className='home'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <AnimateBox />

        <group>
          <EllipticalRotation a={5} b={3} speed={0.01} text={"Exercise1"} path={"./exercise1" } rotateInZAxle={false}/>
          <EllipticalRotation a={4} b={2} speed={0.015} text={"Exercise2"} path={"./exercise2"} rotateInZAxle={true}/>
        </group>

      </Canvas>
    </div>
  );
};

export default Home;