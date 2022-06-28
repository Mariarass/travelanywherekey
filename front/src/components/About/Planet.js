/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SunnyChen753/SW fan (https://sketchfab.com/sunnychen753)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-cfefb7b27bbd46c8a745279b5c92fc91
title: Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/planet.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/planet.gltf')
