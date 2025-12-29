import React from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";

//Screen background
function ScreenMenu({ ablumbs, selectedIndex, onSelect, OnOpen}) {
    return (
        <>
            <Html transform position = {[0.03, 1.81, 0.11]} rotation = {[0,0,0]} distanceFactor={1}>
                <div style={{
                    width: 970,
                    height: 760,
                    backgroundImage: `url("/screen/bg.png")`,
                    backgroundSize: "cover",
                    borderRadius: 8,
                    overflow: "hidden"
                }}>
                </div>    
            </Html>

            <div className = "carousel" role = "list">

            </div>


        </>
    );
}

export default function IpodModel() {
    const { scene } = useGLTF("/models/ipod.glb");
    
    //Creating the handleButton that is a blueprint to handle the 4 types of buttons
    const handleButton = (type) => {
        return (e) => {
            e.stopPropagation();
            console.log(type);
        };
    };
      

  return (
    <group>
        <primitive 
            object = {scene}
            position = {[0, 0, 0]}
            scale = {1}
        />

        <primitive object={scene} />

        {/*Menu button */}
        <mesh position={[0.025, 0.05, 0.1]} onPointerDown = {handleButton("menu")}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

        {/*play button */}
        <mesh position={[0.025, -1.15, 0.1]} onPointerDown = {handleButton("menu")}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

        {/*Next button */}
        <mesh position={[0.625, -0.55, 0.1]} onPointerDown = {handleButton("menu")}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

        {/*Back button */}
        <mesh position={[-0.60, -0.55, 0.1]} onPointerDown = {handleButton("menu")}>
            <circleGeometry args={[0.27, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>

         {/*middle button */}
        <mesh position={[0.035, -0.55, 0.1]} onPointerDown = {handleButton("menu")}>
            <circleGeometry args={[0.3, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
        </mesh>


        <axesHelper args={[2]} />
        <gridHelper args={[10, 10]} />

        {/*All screen interactions here*/}
        <ScreenMenu />

    </group>
  );
}


useGLTF.preload("/models/ipod.glb");
