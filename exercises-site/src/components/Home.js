import React from 'react';
import { Suspense } from 'react';
import '../Stylesheet/styles/Home.css'
import { Canvas, useLoader  } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei';

import { EllipticalRotation } from './ElipticalRotation.js';


const RenderPhoenix = ({url}) => {

  const geom = useLoader(GLTFLoader, url);
  return (
    <>
      <primitive
        object={geom.scene}
        position={[4, 0, 3.2]}
        scale={[0.02,0.02,0.02]} 
        rotation={[0, -Math.PI / 2.4, 0]}
        children-0-castShadow 
      />
    </>
  );


};

const Home = () => {

  return (
    <div className='home'>
      <Canvas>
        <ambientLight intensity={1} />
        
        <Suspense fallback={"Loading..."}>
          <RenderPhoenix url={"/logo_parteFenix.glb"}/>
        </Suspense>

        <group>
          <EllipticalRotation a={7} b={2} c={2} speed={0.01} text={"Exercise1"} path={"./exercise1" } rotateInZAxle={true}/>
          <EllipticalRotation a={4} b={2} c={3} speed={0.015} text={"Exercise2"} path={"./exercise2"} rotateInZAxle={true}/>
        </group>

      </Canvas>
    </div>
  );
};

export default Home;