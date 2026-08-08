import React from 'react'
import { Watch_model } from './Watch_model'
import { Center, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Scale } from 'lucide-react'
import { state } from './Store'
import { snapshot } from 'valtio'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useSnapshot } from 'valtio'
import { Stats } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import * as THREE from 'three'
import { RectAreaLightHelper } from 'three-stdlib'
import { RectAreaLightUniformsLib } from 'three-stdlib'
import { useEffect } from 'react'





const Scene = () => {
  const modelref = useRef(null)
  const dirLightRef = useRef()
    const dirLightRef2 = useRef()

  const rectLightRef = useRef()
  const rectLightRef1 = useRef()

useHelper(dirLightRef, THREE.DirectionalLightHelper, 1, 'red')
useHelper(dirLightRef2, THREE.DirectionalLightHelper, 1, 'green')

useHelper(rectLightRef, RectAreaLightHelper, 'cyan')
useHelper(rectLightRef1, RectAreaLightHelper, 'cyan')

  const snap = useSnapshot(state)
  useGSAP(()=>{
    if( snap.intro==false ) gsap.to(modelref.current.position,{
      y:0,
      duration:2,
      ease:'back.Out'})
    if( snap.intro==false ) gsap.to(modelref.current.rotation,{
      x:Math.PI*0.45,
      y:-0.9,
        duration: 1.6,
        ease: 'power2.out'
    })  
       if( snap.intro==true ) gsap.to(modelref.current.position,{
      y:-7,
      duration:2,
      ease:'back.Out'})

   },[snap.intro])
    useEffect(() => {
    RectAreaLightUniformsLib.init()
  }, [])

  return (
    <>
    
    <PerspectiveCamera   fov={45}/>
  <Environment files={'studio_small_05_1k.hdr'} environmentIntensity={30} environmentRotation={[1.15,1,2]}/>
    {/* <directionalLight intensity={30} position={[1,-2,3]} ref={dirLightRef}/> */}
    {/* <directionalLight intensity={2} position={[-8,-2,5]} scale={1} ref={dirLightRef2} /> */}
{/* <directionalLight
  ref={dirLightRef}
  intensity={30}
  position={[1,2,10]} 
  castShadow
  shadow-mapSize={[2048, 2048]}
  shadow-radius={8} // softens edges — three.js soft shadow trick
  shadow-bias={-0.0005}
/> */}
        {/* <rectAreaLight    ref={rectLightRef1}
        width={0.5}
        height={0.5}
        intensity={0}
        rotation={[-6,4.8,2]}
        position={[-3 ,2.5 ,0]}
        color="#ffffff"
      />  */}
           <rectAreaLight    ref={rectLightRef}
        width={4}
        height={3}
        intensity={30}
        rotation={[-0.6,0.8,0]}
        position={[0,0.5,4]}
        color="#ffffff"
      /> 


    <OrbitControls/>      
      {/* <Stats/> */}

        <group ref={modelref} Scale={30} position={[0,-70,0]}  rotation={[3,2,0.4]}>
            <Watch_model />
        </group>
    </>
  )
}

export default Scene
