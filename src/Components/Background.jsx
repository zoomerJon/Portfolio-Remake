import { useRef, useState } from "react";
import { Backdrop } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export default function Background() {
  const [color, setColor] = useState("#0580c7");
  const [active, setActive] = useState(false);
  const mesh = useRef();

  const colors = ["#353540", "#04a437", "#ff6013", "#0580c7"];
  let curColor = -1;

  useEffect(() => {
    setTimeout(() => {
      curColor = colors.indexOf(color) + 1;
      if (curColor >= colors.length) {
        curColor = 0;
      }
      console.log(colors.length);
      setColor(colors[curColor]);
    }, 2000);
  }, [color]);

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
      scale={[50, 10, 4]}
      onClick={() => {
        setActive(!active);
      }}
    >
      <meshStandardMaterial color={color} envMapIntensity={0.1} ref={mesh} />
    </Backdrop>
  );
}
