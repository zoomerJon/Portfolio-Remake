import { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { PointLightHelper } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useHelper, Stars } from "@react-three/drei";
import Desk from "./Components/Desk";
import Mac from "./Components/Mac";
import Mac2 from "./Components/Mac2";
import Phone from "./Components/Phone";
import Stand from "./Components/Stand";
import Tablet from "./Components/Tablet";
import "./App.css";

function Lights() {
  const light = useRef();
  useHelper(light, THREE.PointLightHelper, "cyan");
  return (
    <pointLight
      ref={light}
      castShadow
      position={[-5, 5, 5]}
      color={0xffffff}
      intensity={0.4}
    />
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 40 }}>
      <ambientLight intensity={0.6} />
      <Lights />
      <OrbitControls enableZoom={true} />
      <Desk position={[0, -5, 0]} scale={[7, 7, 7]} />
      <Phone
        position={[3.5, 0, -2]}
        rotation={[Math.PI / 1.1, 0, -Math.PI]}
        scale={[0.7, 0.7, 0.7]}
      />
      {/* <mesh position={[0, 4, 0]} castShadow>
        <sphereBufferGeometry args={[5, 24, 24]} />
        <meshStandardMaterial color={"blue"} />
      </mesh> */}
      {/* <Mac /> */}
      {/* <Mac position={[0, 2, 0]} scale={[10, 10, 10]} /> */}
      <Mac2 position={[0, -1.38, 0]} scale={[10, 10, 10]} />
      {/* <Tablet
        position={[0, -0.23, -0.68]}
        rotation={[-0.5, -Math.PI, 0]}
        scale={[10, 10, 10]}
      />
      <Stand position={[-0.6, -1.45, 0]} scale={[0.015, 0.015, 0.015]} /> */}
      <Tablet
        position={[-3.4, -0.23, -0.68]}
        rotation={[-0.5, -Math.PI, 0]}
        scale={[10, 10, 10]}
      />
      <Stand position={[-4, -1.45, 0]} scale={[0.015, 0.015, 0.015]} />
      {/* <Stars /> */}
    </Canvas>
  );
}

export default App;
