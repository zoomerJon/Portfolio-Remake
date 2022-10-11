import { forwardRef, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Billboard,
  Html,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
  Stars,
} from "@react-three/drei";
import Desk from "./Components/Desk";
import Mac from "./Components/Mac";
import Mac2 from "./Components/Mac2";
import Stand from "./Components/Stand";
import Tablet from "./Components/Tablet";
import "./App.css";

function App() {
  return (
    <Canvas camera={{ fov: 40 }}>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={true} />
      <Desk position={[0, -5, 0]} scale={[7, 7, 7]} />
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
