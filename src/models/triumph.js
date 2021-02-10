import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('./triumph.gltf');
  return <primitive object={gltf.scene} dispose={null}/>
}

const Triumph = () => {
  return (
    <Canvas
      colorManagement
      camera={{position: [30, -2, 3], fov: 30}}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 50, 5]} intensity={2} />
        <mesh position={[0, -2.5, 0]}>
          <Model />
        </mesh>
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default Triumph;