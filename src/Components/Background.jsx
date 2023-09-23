import { useRef, useState } from "react";
import * as THREE from "three";
import { Backdrop } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export default function Background() {
  const [color, setColor] = useState("#0580c7");
  const [active, setActive] = useState(false);
  const mesh = useRef();
  const state = new useThree();

  const colors = ["#04a437", "#ff6013", "#353540", "#0580c7"];
  let curColor = -1;

  useEffect(() => {
    setTimeout(() => {
      curColor = colors.indexOf(color) + 1;
      if (curColor >= colors.length) {
        curColor = 0;
      }
      // console.log(state.camera.position);
      // console.log(state.camera.rotation);
      // console.log(
      //   new THREE.Vector3(0, 0, -2)
      //     .applyQuaternion(state.camera.quaternion)
      //     .add(state.camera.position)
      // );
      setColor(colors[curColor]);
    }, 2000);
  }, [color]);

  // useFrame((delta) => {
  //   state.camera.lookAt(
  //     0.41458645222258866,
  //     1.5348881153167997,
  //     9.746772178051893
  //   );
  //   state.camera.updateProjectionMatrix();
  // });

  // useFrame(() => {
  //   if (active) {
  //     setColor("#04a437");
  //     // setColor("#ff6013");
  //   } else {
  //     setColor("#0580c7");
  //     // setColor("#353540");
  //   }
  // });

  return (
    <Backdrop
      receiveShadow
      floor={2}
      position={[0, -0.8, -3]}
      scale={[40, 10, 8]}
      onClick={() => {
        setActive(!active);
      }}
    >
      <meshStandardMaterial color={color} envMapIntensity={0.1} ref={mesh} />
    </Backdrop>
  );
}
