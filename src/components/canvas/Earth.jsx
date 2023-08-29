import React, { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three";

const EarthSphere = ({ texture }) => {
  const earthRef = React.useRef();

  const memoizedMaterial = useMemo(
    () => <meshBasicMaterial map={texture} attach="material" />,
    [texture]
  );

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} scale={[1.5, 1.5, 1.5]} ref={earthRef}>
      {memoizedMaterial}
      {/* <meshBasicMaterial map={texture} attach="material" /> */}
    </Sphere>
  );
};

const Earth = () => {
  const texture = new TextureLoader().load("/images/earth2.jpg"); 

  return (
    <Canvas
      // camera={{ position: [0, 0, 1], fov: 45 }}
      style={{ height: "500px" }}
    >
      <EarthSphere texture={texture} />
    </Canvas>
  );
};

export default Earth;
