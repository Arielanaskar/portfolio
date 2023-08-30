import React, { useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, useProgress } from "@react-three/drei";
import { TextureLoader } from "three";
import CanvasLoader from "../Loader";

const EarthSphere = () => {
  const texture = new TextureLoader().load("/images/earth.png"); 
  const earthRef = React.useRef();
  // const memoizedMaterial = useMemo(
  //   () => <meshBasicMaterial map={texture} attach="material" />,
  //   [texture]
  // );
  // useFrame(() => {
  //   if (earthRef.current) {
  //     earthRef.current.rotation.y += 0.01;
  //   }
  // });
  return (
    <Sphere args={[1, 32, 32]} scale={[1.5, 1.5, 1.5]} ref={earthRef}>
      <meshBasicMaterial map={texture} attach="material"/>
    </Sphere>
  );
};

const Earth = () => {
  return (
    <Canvas
      // camera={{ position: [0, 0, 1], fov: 45 }}
      style={{ height: "500px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
        />
        <EarthSphere/>
      </Suspense>
    </Canvas>
  );
};

export default Earth;
