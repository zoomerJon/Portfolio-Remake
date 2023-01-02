import { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { PointLightHelper } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Backdrop,
  ContactShadows,
  OrbitControls,
  useHelper,
  softShadows,
  Stars,
  Text3D,
} from "@react-three/drei";
import Background from "./Components/Background";
import Desk from "./Components/Desk";
import Mac from "./Components/Mac";
import Mac2 from "./Components/Mac2";
import Phone from "./Components/Phone";
import Stand from "./Components/Stand";
import Tablet from "./Components/Tablet";
import "./App.css";

softShadows();

function Lights() {
  const light = useRef();
  useHelper(light, THREE.PointLightHelper);
  return (
    <pointLight
      ref={light}
      castShadow
      position={[0, 20, 10]}
      color={0xffffff}
      intensity={0.4}
    />
  );
}

function App() {
  return (
    <div className="main">
      <div className="header">hi</div>
      <Canvas camera={{ fov: 40 }} shadows className="canvas">
        <ambientLight intensity={0.2} />
        <Lights />
        <OrbitControls enableZoom={true} />
        {/* <Desk position={[0, -5, 0]} scale={[7, 7, 7]} /> */}
        <Phone
          position={[3.5, 0, -2]}
          rotation={[Math.PI / 1.1, 0, -Math.PI]}
          scale={[0.7, 0.7, 0.7]}
        />
        {/* <Mac /> */}
        {/* <Mac position={[0, 2, 0]} scale={[10, 10, 10]} /> */}
        {/* <Mac2 position={[0, -1.38, 0]} scale={[10, 10, 10]} castShadow /> */}
        <Mac2 position={[0, -0.35, 0]} scale={[10, 10, 10]} castShadow />
        <ContactShadows
          position={[0, -0.65, 0]}
          opacity={0.75}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        {/* <Tablet
        position={[0, -0.23, -0.68]}
        rotation={[-0.5, -Math.PI, 0]}
        scale={[10, 10, 10]}
      />
      <Stand position={[-0.6, -1.45, 0]} scale={[0.015, 0.015, 0.015]} /> */}
        <Tablet
          position={[-3.4, 0.87, -0.68]}
          rotation={[-0.5, -Math.PI, 0]}
          scale={[10, 10, 10]}
        />
        <Stand position={[-4, -0.35, 0]} scale={[0.015, 0.015, 0.015]} />
        {/* <Stars /> */}
        <Text3D
          // castShadow
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
          position={[2, 3, 0]}
        >
          henlo
          <meshNormalMaterial />
        </Text3D>
        <Background />
      </Canvas>
    </div>
  );
}

export default App;
