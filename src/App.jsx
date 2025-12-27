import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function IpodModel() {
  const gltf = useGLTF("/models/ipod.glb")
  return (
    <primitive 
      object = {gltf.scene}
      position = {[0, 0, 0]}
      scale = {1}
    />
  );
}

function App() {
  return ( 
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <IpodModel />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} autoRotate={false} />

      </Canvas>
    </div>
  );
}

export default App; 