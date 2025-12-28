import React from "react";
import { useGLTF } from "@react-three/drei";

export default function IpodModel() {
  const { scene } = useGLTF("/models/ipod.glb");
  //const gltf = useGLTF("/models/ipod.glb")
      

  return (
    <group>
        <primitive 
            object = {scene}
            position = {[0, 0, 0]}
            scale = {1}
        />

        <primitive object={scene} />

        {/*Menu button */}
        <mesh position={[0.025, 0.05, 0.1]}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

        {/*play button */}
        <mesh position={[0.025, -1.15, 0.1]}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

        {/*Next button */}
        <mesh position={[0.625, -0.55, 0.1]}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

        {/*Back button */}
        <mesh position={[-0.60, -0.55, 0.1]}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

         {/*middle button */}
        <mesh position={[0.035, -0.55, 0.1]}>
            <circleGeometry args={[0.3, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>


        <axesHelper args={[2]} />
        <gridHelper args={[10, 10]} />

    </group>
  );
}


useGLTF.preload("/models/ipod.glb");
