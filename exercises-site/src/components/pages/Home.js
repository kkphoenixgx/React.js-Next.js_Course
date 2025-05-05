import '../../Stylesheet/pages/Home.css'

import React, { useEffect } from 'react';
import { Suspense } from 'react';

import { Canvas, useLoader  } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

import EllipticalRotation  from '../ElipticalRotation';
import { PerspectiveCamera } from '@react-three/drei';
import { Color } from 'three';


const RenderPhoenix = ({url}) => {

  const geom = useLoader(GLTFLoader, url);


  useEffect(() => {
    geom.scene.traverse((child) => {
      if (child.isMesh) {
        if (child.isMesh && child.material) {
          const material = child.material;
          if (material.map) material.map = null;
          child.geometry.center();
    
          let color = "#fb7304"
          material.emissiveIntensity = 0.4;
          material.metalness = 0.5;
          
          material.color = new Color(color);
          material.emissive = new Color(color);
          material.needsUpdate = true;
        }
      }
    });
  }, [geom]);

  return (
    <>
      <primitive
        object={geom.scene}
        position={[-0.83, 3, -3.5]}
        scale={[0.03,0.03,0.03]} 
        rotation={[0, Math.PI / 1.8, 0]}
        children-0-castShadow 
      />
    </>
  );


};

const Home = () => {

  // a > 6
  let paths = [
    { name: "Exercise1", path: "../react-exercises/exercise1", a: 7, b: 2, c: 2, speed: 0.01 },
  ]


  return (
    <div className='home'>
      <h1>Try to catch the link if you can</h1>
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight position={[0, 0, 1]} lookAt={[-0.83, 3, -3.5]} intensity={2} color={"#ffffff"} />
        
        <PerspectiveCamera makeDefault position={[0, 0, 17]} lookAt={[0, 0, 0]} />

        <Suspense fallback={"Loading..."}>
          <RenderPhoenix url="/react-exercises-site/logo_parteFenix.glb" />
        </Suspense>

        <group>
          {/* ----------- Abstract Factory ----------- */}
          { 
            paths.map( (path, index)=> {
              return <EllipticalRotation key={index} a={(path.a < 6)? 6 : path.a} b={path.b} c={path.c} speed={path.speed} text={path.name} path={path.path } rotateInZAxle={true}/>;
            })
          }
        </group>

      </Canvas>
    </div>
  );
};

export default Home;