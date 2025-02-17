import '../../Stylesheet/exercises/threeJs/gridHelper.css'

import { Canvas } from '@react-three/fiber'
import Polyhedron from './utils/Polyhedron'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry, SphereGeometry, DodecahedronGeometry} from 'three'

export const GridHelper = ()=>{
  const polyhedron = [
    new BoxGeometry(),
    new SphereGeometry(0.785398),
    new DodecahedronGeometry(0.785398),
  ]

  return (
    <div className="gridHelper">
      <h2>Here we are GridHelper to see and majure things</h2>

      <Canvas camera={{ position: [0, 3, 6] }}>
        <Polyhedron position={[-1, 2, 0]} polyhedron={polyhedron} canRotate={false} />
        <Polyhedron position={[1, 2, 0]} polyhedron={polyhedron} />
        
        <gridHelper />
        <axesHelper  position={[0, 1,0]}/>
        <OrbitControls />
      </Canvas>
    </div>
  )
}