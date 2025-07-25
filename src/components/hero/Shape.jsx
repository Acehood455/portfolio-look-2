import { MeshDistortMaterial, Sphere } from '@react-three/drei'

const Shape = () => {
  return (
    <>
        <Sphere args={[1, 100, 200]} scale={2.7} >
            <MeshDistortMaterial
              color='#db8b9b'
              attach='material'
              distort={0.5}
              speed={2}
            />

            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]} />
        </Sphere>
    </>
  )
}

export default Shape