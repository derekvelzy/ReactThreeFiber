import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('./yamaha.gltf');
  return <primitive object={gltf.scene} dispose={null}/>
}

const Yamaha = () => {
  return (
    <Canvas
      colorManagement
      camera={{position: [400, 0, 0], fov: 50}}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 50, 5]} intensity={2} />
        <mesh position={[0, -70, 0]}>
          <Model />
        </mesh>
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default Yamaha