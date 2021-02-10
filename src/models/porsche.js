import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('./porsche.gltf');
  return <primitive object={gltf.scene} dispose={null}/>
}

const Porsche = () => {
  return (
    <Canvas
      colorManagement
      camera={{position: [-10, 0.4, 0], fov: 30}}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={8} />
        <directionalLight position={[10, 50, 5]} intensity={3} />
        <mesh position={[0, -0.5, -0.5]}>
          <Model />
        </mesh>
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default Porsche;