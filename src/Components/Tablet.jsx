/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Micah Sturtevant (https://sketchfab.com/micahs)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/microsoft-tablet-f046635a55be422eaf84e069e87c5ce3
title: Microsoft Tablet
*/

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/tablet-v1.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Material0.geometry}
          material={materials.Material0}
        />
        <mesh
          geometry={nodes.Material0_1.geometry}
          material={materials.Material0_0}
        />
        <mesh
          geometry={nodes.Material0_2.geometry}
          material={materials.Material0_1}
        >
          <Html
            // rotation-x={1.58}
            rotation={[1.58, -Math.PI, 0]}
            position={[0.0036, 0.004, 0]}
            // scale={0.0045}
            scale={[0.0045, 0.0057, 0.0045]}
            transform
            occlude
          >
            <video
              className="video-tablet"
              src="/vegas.mp4"
              muted
              loop
              autoPlay
              playsInline
            ></video>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.Material0_3.geometry}
          material={materials.Material0_2}
        />
        <mesh
          geometry={nodes.Material0_4.geometry}
          material={materials.Material0_3}
        />
        <mesh
          geometry={nodes.Material0_5.geometry}
          material={materials.Material0_4}
          //   position={[0, 2, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tablet-v1.glb");
