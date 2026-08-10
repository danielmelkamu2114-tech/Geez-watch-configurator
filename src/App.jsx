import React from 'react'
import Overlay from './overlay'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

const App = () => {
  return (
    <div className='h-full w-full'>
      <div className='absolute inset-0 z-20'>
        <Canvas  gl={{
    toneMapping: THREE.AgXToneMapping,
    toneMappingExposure: 1,
  }}>
          <Scene />
        </Canvas>
      </div>
      <Overlay/>
    </div>
  )
}

export default App