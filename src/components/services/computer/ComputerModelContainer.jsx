import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Laptop } from './Laptop'
import { OrbitControls, Stage } from '@react-three/drei'
import { Mac } from './Mac'

const ComputerModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback='Loading...'>
            <Stage environment='night'>
                <Laptop />
                <Mac />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Suspense>
    </Canvas>
  )
}

export default ComputerModelContainer