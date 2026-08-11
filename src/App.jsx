import React, { Suspense }from 'react'
import Overlay from './overlay'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Loader, useGLTF, useTexture } from '@react-three/drei';

const App = () => {
  return (
    <div className='h-full w-full'>
      <div className='absolute inset-0 z-20'>
        <Canvas  gl={{
    toneMapping: THREE.AgXToneMapping,
    toneMappingExposure: 1,
  }}>
    <Suspense fallback={null}>
          <Scene />
       </Suspense> 
       </Canvas>
        
      </div>
             <Loader/>

      <Overlay/>
    </div>
  )
}

export default App