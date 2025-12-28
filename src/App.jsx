import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import IpodModel from "./ipodModel";

function App() {
  return ( 
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <IpodModel />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls autoRotate={false} enableRotate={false} enableZoom={true} enablePan={true} />

      </Canvas>
    </div>
  );
}

export default App; 