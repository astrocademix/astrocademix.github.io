import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import * as random from "maath/random";

const MAX_STARS = 10000;
const ADD_INTERVAL = 0.5; // seconds between each star burst
const ADD_AMOUNT = 200; // stars to add each burst

const StarBackground = () => {
  const ref = useRef();
  const timeRef = useRef(0);

  // Create large static buffer once
  const stars = useRef(
    random.inSphere(new Float32Array(MAX_STARS * 3), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }

    // Remove this burst logic — not needed if we prefill all
    timeRef.current += delta;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} positions={stars.current} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.setClearColor('#000000', 0);
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
