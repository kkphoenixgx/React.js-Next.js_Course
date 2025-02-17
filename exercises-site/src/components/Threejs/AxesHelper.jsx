import '../../Stylesheet/exercises/threeJs/axeshelper.css'

import { Canvas } from '@react-three/fiber'
import Polyhedron from './utils/Polyhedron'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry, SphereGeometry, DodecahedronGeometry} from 'three'

export const AxesHelper = ()=>{
  const polyhedron = [
    new BoxGeometry(),
    new SphereGeometry(0.785398),
    new DodecahedronGeometry(0.785398),
  ]

  return (
    <div className="axesHelper">
      <h2>Here we are axesHelper in the canvas with 1 of length for each side </h2>

      <Canvas camera={{ position: [0, 0, 3] }}>
        <Polyhedron position={[0, 0, 0]} polyhedron={polyhedron} canRotate={false} />
        
        <axesHelper args={[1]} />

        <OrbitControls />
      </Canvas>
    </div>
  )
}