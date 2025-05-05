import { Canvas, useFrame } from '@react-three/fiber'

import * as THREE from 'three'
import { useRef } from 'react'
import { useControls } from 'leva'

import "./styles/materials.css"

function PolyhedronWithStats(props) {

  let ref = useRef();

  useFrame((_, delta)=>{

    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.y += 0.05 * delta;
  })

  useControls(props.name, {
    wireframe: {
      value: false,
      onChange: (e)=>{
        ref.current.material.whireframe = e;
      }
    },
    flatShading: {
      value: true,
      onChange: (e)=>{
        ref.current.material.flatShading = e;
        ref.current.material.needsUpdate = true;
      }
    },
    color: {
      value: 'lime',
      onChange: (e)=>{
        ref.current.material.color = new THREE.Color(e);
      }
    }

  })  


  return (

    <mesh {...props} ref={ ref } >
      <icosahedronGeometry args={[1,1]} />
    </mesh>

  )
}

export default function Materials() {


  return (
    <div className="materials">
      <Canvas camera={{position: [-1, 4, 2.5]}} >
        <directionalLight position={[1, 1, 1]} />

        < PolyhedronWithStats name="meshBasicMaterial" position={[-3, 1, 0]} material={new THREE.MeshBasicMaterial()} />
        < PolyhedronWithStats name="meshNormalMaterial" position={[-1, 1, 0]} material={new THREE.MeshNormalMaterial()} />
        < PolyhedronWithStats name="meshPhongMaterial" position={[1, 1, 0]} material={new THREE.MeshPhongMaterial()} />

      </Canvas>

    </div>
  )
}