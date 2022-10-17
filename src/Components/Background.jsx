import { useRef, useState } from "react";
import { Backdrop } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Background() {
  const [color, setColor] = useState("#353540");
  const [active, setActive] = useState(false);
  const mesh = useRef();

  useFrame(() => {
    if (active) {
      setColor("#ff6013");
    } else {
      setColor("#353540");
    }
  });

  return (
    <Backdrop
      receiveShadow
      floor={2}
      position={[0, -1.8, -3]}
      scale={[50, 10, 4]}
      onClick={() => {
        setActive(!active);
      }}
    >
      <meshStandardMaterial color={color} envMapIntensity={0.1} ref={mesh} />
    </Backdrop>
  );
}
