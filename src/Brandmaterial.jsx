
import React from 'react'
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'


export function ThinGlassMaterial({ color = "#ffffff" }) {
  return (
    <meshPhysicalMaterial
        // envMapIntensity={0}

      color={color}
      
      // Transparency settings
      // transmission={1.0}        /* Pure see-through clarity */
      transparent={true}      
      ior={1.5}                /* Lower Index of Refraction for thin glass/plastic */
      roughness={0.1}  
      metalness={1}        /* Crystal clear surface with almost zero frost */
      opacity={0.2}
      // Crucial setting for thin walls: turn off depth thickness
      thickness={1}      
      reflectivity={1}   
      depthWrite={false}  
      side={THREE.FrontSide}
      
      // // Surface Gloss
      // clearcoat={1.0}
      // clearcoatRoughness={0.0}
    />
  )
}