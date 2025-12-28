import { useGLTF } from "@react-three/drei";

export function Model() { 
    const { scene } = useGLTF("/sunglasses.glb");
    return <primitive object={scene} />; 
}