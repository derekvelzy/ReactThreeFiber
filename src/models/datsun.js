import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('./scene.gltf');
  return <primitive object={gltf.scene} dispose={null}/>
}

const Datsun = () => {
  return (
    <Canvas
      colorManagement
      camera={{position: [-50, 0, 5], fov: 5}}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={8} />
        <directionalLight position={[10, 50, 5]} intensity={3} />
        <mesh position={[10, 10.5, -3.7]}>
          <Model />
        </mesh>
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default Datsun;