import { useEffect, useRef, useState, forwardRef } from "react";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
// import { PointLightHelper } from "three";
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

function Scene({ laptopActive }) {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(false);
  const [springIndex, setSpringIndex] = useState(2);
  // const [laptopActive, setLaptopActive] = useState(false);

  const { spring } = useSpring({
    spring: springIndex,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  // interpolate values from commong spring
  const scale = spring.to([0, 1], [10, 10, 10], [2, 2, 2]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

  const ref = useRef();
  const state = new useThree();
  let yTranslation;

  yTranslation = mobile ? 0.01 : 0.005;

  useEffect(() => {
    // window.innerHeight > window.innerWidth && setMobile(true);
    if (window.innerHeight > window.innerWidth) {
      setMobile(true);
    }
    document.getElementById("zoom-button").classList.add("desktop-position");
  }, []);

  useFrame((delta) => {
    const t = state.clock.getElapsedTime();
    if (!laptopActive && !mobile) {
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        Math.cos(t / 2) / 20 + 0.15,
        0.1
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        Math.sin(t / 4) / 20,
        0.1
      );
      ref.current.rotation.z = THREE.MathUtils.lerp(
        ref.current.rotation.z,
        Math.sin(t / 8) / 20,
        0.1
      );
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        Math.sin(t / 2) * yTranslation,
        0.1
      );
    } else {
      ref.current.rotation.x = 0;
      ref.current.rotation.y = 0;
      ref.current.rotation.z = 0;
      ref.current.position.y = 0;
    }
  });

  return (
    <>
      <Lights />
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

      <Phone
        position={!mobile ? [3.8, 0.4, -1] : [0.375, 0.3, -2]}
        rotation={
          !mobile
            ? [Math.PI / 1.1 + 0.2, 0.5, -Math.PI + 0.04]
            : [Math.PI / 1.1 + -0.2, 0, -Math.PI + 0]
        }
        scale={!mobile ? [0.7, 0.7, 0.7] : [1.2, 1.2, 1.2]}
      />
      <animated.mesh
        scale={scale}
        // rotation={laptopActive ? rotation : [0, 0, 0]}
      >
        <Mac2
          position={!mobile ? [0, 0, 0] : [0.5, 0.4, 0]}
          // scale={[10, 10, 10]}
          ref={ref}
          castShadow
          mobile={mobile}
          laptopActive={laptopActive}
        />
      </animated.mesh>
      {/* <Html
        position={
          !laptopActive
            ? !mobile
              ? [-0.6, 2.75, -3]
              : [-0.5, -0.2, 0.25]
            : // : [-0.75, -0.2, 0.25]
            !mobile
            ? [-0.4, 2.4, -3]
            : [-0.75, -0.2, 0.25]
        }
        // occlude
        // className="desktop"
      >
        <div
          onClick={() => {
            setLaptopActive(!laptopActive);
            // setActive(!active);
          }}
          className="view-button"
        >
          <span className="view-text">View Projects</span>{" "}
          <FaMagnifyingGlassPlus /> <span className="slash">/</span>
          <FaMagnifyingGlassMinus />
        </div>
      </Html> */}
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
    </>
  );
}

const App = () => {
  const [laptopActive, setLaptopActive] = useState(false);

  return (
    <div className="main">
      <Canvas shadows className="canvas" style={{ touchAction: "none" }}>
        <Scene laptopActive={laptopActive} />
      </Canvas>
      <div
        id="zoom-button"
        className="zoom"
        onClick={() => {
          setLaptopActive(!laptopActive);
          console.log("hi");
        }}
      >
        <span className="view-text">View Projects</span>{" "}
        <FaMagnifyingGlassPlus /> <span className="slash">/</span>
        <FaMagnifyingGlassMinus />
      </div>
      <Loader />
    </div>
  );
};

export default App;
