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

function Lights() {
  const light = useRef();
  useHelper(light, THREE.PointLightHelper);

  return (
    <pointLight
      ref={light}
      castShadow
      position={[0, 20, 10]}
      color={0xffffff}
      intensity={0.8}
    />
  );
}

function TabletSetup() {
  return (
    <>
      <Tablet
        position={[-3.4, 0.87, -0.68]}
        rotation={[-0.5, -Math.PI, 0]}
        scale={[10, 10, 10]}
      />
      <Stand position={[-4, -0.35, 0]} scale={[0.015, 0.015, 0.015]} />
    </>
  );
}

const App = () => {
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
      >
        <Html>
          {/* <div className="profile-container">
            <img src="/me.jpg" />
            <div className="name">Jonathan Ovalle</div>
            <div className="profile-description">
              A freelance web developer based in Las Vegas
            </div>
            <div className="button-container">
              <a
                className="button"
                href="https://github.com/zoomerJon"
                target="_blank"
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    className="svg-inline--fa fa-github fa-w-16"
                    role="img"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </span>
                <span className="button-title">GitHub</span>
              </a>
            </div>
          </div> */}
        </Html>
        {/* <ambientLight intensity={0.2} /> */}
        <Lights />
        <Phone
          position={[3.5, 0, -2]}
          rotation={[Math.PI / 1.1, 0, -Math.PI]}
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
          size={1.5}
          font="/Inter_Bold.json"
          position={[-5.25, 4, -2]}
        >
          Hello!
          <meshNormalMaterial />
        </Text3D>
        <Mac2 position={[0, -0.35, 0]} scale={[10, 10, 10]} castShadow />
        <PresentationControls
          global
          cursor={false}
          // rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.4]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 2, tension: 400 }}
        >
          <PerspectiveCamera
            makeDefault
            fov={40}
            position={[
              0.826936462123091, 4.091559396677518, 11.117779453143493,
            ]}
            rotation={[
              -0.20436300171831873, -0.05690351967158457, -0.011786707378217003,
            ]}
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
