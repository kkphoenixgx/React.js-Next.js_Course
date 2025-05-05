import './styles/axeshelper.css'

import { Canvas } from '@react-three/fiber'
import Polyhedron from './utils/Polyhedron'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry, SphereGeometry, DodecahedronGeometry} from 'three'

const AxesHelper = ()=>{
  const polyhedron = [
    new BoxGeometry(),
    new SphereGeometry(0.785398),
    new DodecahedronGeometry(0.785398),
  ]

  return (
    <div className="axesHelper">
      <h2>Here we are axesHelper with 1 of length for each side </h2>

      <Canvas camera={{ position: [0, 0, 3] }}>
        
        <Polyhedron position={[2, 0, 0]} polyhedron={polyhedron} canRotate={false} />
        <axesHelper args={[1]} />

        <group position={[-2, 0, 0]} >
          <Polyhedron polyhedron={polyhedron} canRotate={false} />
          <axesHelper args={[1]} />
        </group>

        <OrbitControls />
      </Canvas>

      <p>You can see that we can use a gridHelper in a object. You can create it using a group with a position</p>

    </div>
  )
}

export default AxesHelper;