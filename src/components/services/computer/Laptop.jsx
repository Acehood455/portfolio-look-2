import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.002, 0.001]} rotation={[0, 0, 0.003]} scale={[2, 2, 2.914]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.color} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.border} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.keyboard} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.dark} />
      </group>
      <group position={[-1.98, 0.062, -2.301]} rotation={[0, 0, 1.923]} scale={[2, 2, 2.914]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials['color.001']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.screen_border} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.wallpeper} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.webcam} />
      </group>
    </group>
  )
}

useGLTF.preload('/laptop.glb')
