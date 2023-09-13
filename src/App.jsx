import { forwardRef, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PointLightHelper } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FaMagnifyingGlassMinus, FaMagnifyingGlassPlus } from "react-icons/fa6";
import {
  ContactShadows,
  Html,
  Loader,
  PerspectiveCamera,
  PresentationControls,
  useHelper,
  Text3D,
} from "@react-three/drei";
import Background from "./Components/Background";
import Mac2 from "./Components/Mac2";
import Phone from "./Components/Phone";
import Stand from "./Components/Stand";
import Tablet from "./Components/Tablet";
import "./App.css";

function Lights() {
  const light = useRef();
  useHelper(light, THREE.PointLightHelper);

  return (
    <pointLight
      ref={light}
      castShadow
      position={[0, 20, 10]}
      color={0xffffff}
      intensity={1}
    />
  );
}

function TabletSetup() {
  return (
    <>
      <Tablet
        position={[-3.4, 1, 0]}
        rotation={[0, -Math.PI + 0.5, 0]}
        scale={[10, 10, 10]}
      />
      <Stand
        position={[-3.8, -0.35, 0.3]}
        scale={[0.015, 0.015, 0.015]}
        rotation={[0, 0.5, 0]}
      />
    </>
  );
}

const App = () => {
  const [mobile, setMobile] = useState(false);
  const [laptopActive, setLaptopActive] = useState(false);

  useEffect(() => {
    window.innerHeight > window.innerWidth && setMobile(true);
  }, []);

  return (
    <div className="main">
      <Canvas shadows className="canvas" style={{ touchAction: "none" }}>
        <Lights />
        <Phone
          position={[3.8, 0.4, -1]}
          rotation={[Math.PI / 1.1 + 0.2, 0.5, -Math.PI + 0.04]}
          scale={[0.7, 0.7, 0.7]}
        />
        <TabletSetup />
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={mobile ? 0.7 : 1.1}
          font="/Inter_Bold.json"
          position={mobile ? [-1.2, 2.7, -2] : [-4.8, 3, -0.5]}
          rotation={mobile ? [0.0, 0, 0] : [0.05, 0.3, -0.01]}
        >
          Hello!
          <meshNormalMaterial />
        </Text3D>
        <Mac2
          position={[0, 0, 0]}
          scale={[10, 10, 10]}
          castShadow
          mobile={mobile}
          laptopActive={laptopActive}
        />
        <Html
          position={!laptopActive ? [-0.6, 2.75, -3] : [-0.4, 2.4, -3]}
          occlude
        >
          <div
            onClick={() => {
              setLaptopActive(!laptopActive);
            }}
            className="view-button"
          >
            <span className="view-text">View Projects</span>{" "}
            <FaMagnifyingGlassPlus /> <span className="slash">/</span>
            <FaMagnifyingGlassMinus />
          </div>
        </Html>
        <PresentationControls
          global
          cursor={false}
          polar={[-0.8, 0.4]}
          azimuth={[-1.2, 1.2]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 2, tension: 400 }}
        >
          <PerspectiveCamera
            makeDefault
            fov={40}
            position={mobile ? [0, 4, 10] : [0, 2.95, 8]}
            rotation={mobile ? [-0.2, 0, 0] : [-0.16216382099825055, 0, 0]}
          />
        </PresentationControls>
        <ContactShadows
          frames={1}
          position={[0, -0.65, 0]}
          opacity={0.75}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <Background />
      </Canvas>
      <Loader />
    </div>
  );
};

export default App;
