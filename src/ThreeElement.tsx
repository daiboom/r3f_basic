import * as THREE from 'three'

export default function ThreeElement() {
  return <>
  <mesh rotation={[0,THREE.MathUtils.degToRad(30),0]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="black" />
  </mesh>
  </>
}