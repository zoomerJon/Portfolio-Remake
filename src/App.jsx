import { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { PointLightHelper } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Backdrop,
  ContactShadows,
  Html,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  useHelper,
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
import { useEffect } from "react";

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

  useEffect(() => {
    window.innerHeight > window.innerWidth && setMobile(true);
  }, []);

  return (
    <div className="main">
      <Canvas
        // camera={{
        //   fov: 40,
        //   position: [0.826936462123091, 4.091559396677518, 11.117779453143493],
        //   rotation: [
        //     -0.20436300171831873, -0.05690351967158457, -0.011786707378217003,
        //   ],
        // }}
        shadows
        className="canvas"
        style={{ touchAction: "none" }}
      >
        {/* <ambientLight intensity={0.2} /> */}
        <Lights />
        <Phone
          position={[3.8, 0.4, -1]}
          rotation={[Math.PI / 1.1 + 0.2, 0.5, -Math.PI + 0.04]}
          scale={[0.7, 0.7, 0.7]}
        />
        <TabletSetup />
        <Text3D
          // castShadow
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
          // position={[-4.8, 3, -0.5]}
          rotation={mobile ? [0.0, 0, 0] : [0.05, 0.3, -0.01]}
          // rotation={[0.05, 0.3, -0.01]}
        >
          Hello!
          <meshNormalMaterial />
        </Text3D>
        <Mac2
          position={[0, 0, 0]}
          scale={[10, 10, 10]}
          castShadow
          mobile={mobile}
        />
        <PresentationControls
          global
          cursor={false}
          // rotation={[0.13, 0.1, 0]}
          polar={[-0.8, 0.4]}
          azimuth={[-1.2, 1.2]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 2, tension: 400 }}
        >
          <PerspectiveCamera
            makeDefault
            fov={40}
            position={mobile ? [0, 4, 10] : [0, 2.95, 8]}
            // position={[0, 2.95, 8]}
            // rotation={[
            //   -0.16216382099825055, 0.050260368961909295, 0.008218970661645904,
            // ]}
            rotation={mobile ? [-0.2, 0, 0] : [-0.16216382099825055, 0, 0]}
          />
        </PresentationControls>
        {/* <OrbitControls enableZoom={true} /> */}
        {/* <Desk position={[0, -5, 0]} scale={[7, 7, 7]} /> */}
        {/* <Mac /> */}
        {/* <Mac position={[0, 2, 0]} scale={[10, 10, 10]} /> */}
        {/* <Mac2 position={[0, -1.38, 0]} scale={[10, 10, 10]} castShadow /> */}
        <ContactShadows
          frames={1}
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
        {/* <Tablet
          position={[-3.4, 0.87, -0.68]}
          rotation={[-0.5, -Math.PI, 0]}
          scale={[10, 10, 10]}
        />
        <Stand position={[-4, -0.35, 0]} scale={[0.015, 0.015, 0.015]} /> */}
        {/* <Stars /> */}

        <Background />
      </Canvas>
    </div>
  );
};

export default App;
