import '../../Stylesheet/pages/Home.css'

import React from 'react';
import { Suspense } from 'react';

import { Canvas, useLoader  } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
//import { OrbitControls } from '@react-three/drei';

import { EllipticalRotation } from '../ElipticalRotation';
import { PerspectiveCamera } from '@react-three/drei';


const RenderPhoenix = ({url}) => {

  const geom = useLoader(GLTFLoader, url);
  return (
    <>
      <primitive
        object={geom.scene}
        position={[6, 0, 3.2]}
        scale={[0.03,0.03,0.03]} 
        rotation={[0, -Math.PI / 2.4, 0]}
        children-0-castShadow 
      />
    </>
  );


};

const Home = () => {

  let paths = [
    { name: "Exercise1", path: "../react-exercises/exercise1", a: 7, b: 2, c: 2, speed: 0.01 },
    { name: "Exercise2", path: "../react-exercises/exercise2", a:4, b: 2, c: 3, speed: 0.015 }
  ]


  return (
    <div className='home'>
      <h1>Try to catch the link if you can</h1>
      <Canvas>
        <ambientLight intensity={1} />
        <PerspectiveCamera makeDefault position={[0, 0, 15]} ></PerspectiveCamera>
        
        <Suspense fallback={"Loading..."}>
          <RenderPhoenix url={"/logo_parteFenix.glb"}/>
        </Suspense>

        <group>
          {/* ----------- Abstract Factory ----------- */}
          { 
            paths.map( (path, index)=> {
              return <EllipticalRotation a={path.a} b={path.b} c={path.c} speed={path.speed} text={path.name} path={path.path } rotateInZAxle={true}/>;
            })
          }
        </group>

      </Canvas>
    </div>
  );
};

export default Home;