import { Canvas } from '@react-three/fiber'
import Polyhedron from './utils/Polyhedron'
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'

import "../../Stylesheet/exercises/threeJs/statsPanel.css"

export default function StatsPanel() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ]

  return (
    <div className="statsPanel">
      <p>Here we are using orbit controls to move and stats controls framework to check page's fps</p>

      <Canvas camera={{ position: [0, 0, 3] }}>
        <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  )
}