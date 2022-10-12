/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Asher Dipprey (https://sketchfab.com/asher333)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/smartphone-3d-model-d877184c9c33444190d747c824bcc55e
title: Smartphone 3D Model
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/phone-v1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.14, 0]} rotation={[-1.71, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.34, 0.04, -1.01]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={0.54}>
            <group position={[1.22, -0.18, 0.68]} rotation={[-Math.PI, 0, 0]} scale={[0.21, 0.02, 0.21]}>
              <group position={[0.06, -0.78, -0.01]} scale={[0.46, 0.41, 0.46]}>
                <mesh geometry={nodes.Object_13.geometry} material={materials.peble} />
                <mesh geometry={nodes.Object_14.geometry} material={materials.peble} />
              </group>
              <group position={[-0.01, -0.24, 0.01]} scale={1.01}>
                <mesh geometry={nodes.Object_16.geometry} material={materials.color} />
                <mesh geometry={nodes.Object_17.geometry} material={materials.lens} />
                <mesh geometry={nodes.Object_18.geometry} material={materials.black} />
              </group>
              <group position={[1.97, -0.78, -0.01]} scale={[0.46, 0.41, 0.46]}>
                <mesh geometry={nodes.Object_20.geometry} material={materials.peble} />
                <mesh geometry={nodes.Object_21.geometry} material={materials.peble} />
              </group>
              <mesh geometry={nodes.Object_10.geometry} material={materials.color} />
              <mesh geometry={nodes.Object_11.geometry} material={materials.black} />
            </group>
            <mesh geometry={nodes.Object_4.geometry} material={materials.color} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.color} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.accent} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.gltf_screen} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.black} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/phone-v1.glb')
