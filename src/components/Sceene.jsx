import { useGLTF, useTexture } from '@react-three/drei';

import * as THREE from 'three';

export function Sceene(props) {
  const { nodes, materials } = useGLTF('models/sceene.glb');

  const textureFloor = useTexture('textures/baked-scene2.jpg');
  textureFloor.encoding = THREE.sRGBEncoding;
  textureFloor.flipY = false;

  const textureCube = useTexture('textures/baked-cube1.jpg');
  textureCube.encoding = THREE.sRGBEncoding;
  textureCube.flipY = false;

  const textureCube2 = useTexture('textures/baked-cube2.jpg');
  textureCube2.encoding = THREE.sRGBEncoding;
  textureCube2.flipY = false;

  const textureCube3 = useTexture('textures/baked-cube3.jpg');
  textureCube3.encoding = THREE.sRGBEncoding;
  textureCube3.flipY = false;

  const textureFloorMaterial = new THREE.MeshBasicMaterial({
    map: textureFloor,
  });

  const textureCubeMaterial = new THREE.MeshBasicMaterial({
    map: textureCube,
  });

  const textureCube2Material = new THREE.MeshBasicMaterial({
    map: textureCube2,
  });

  const textureCube3Material = new THREE.MeshBasicMaterial({
    map: textureCube3,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={textureCubeMaterial}
        position={[-0.81, 0.036, 0.112]}
        rotation={[0, -0.605, 0]}
        scale={[0.121, 0.028, 0.121]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={textureCube2Material}
        position={[-0.744, 0.036, -0.142]}
        rotation={[0, -0.605, 0]}
        scale={[0.121, 0.028, 0.121]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={textureCube3Material}
        position={[-0.54, 0.023, -0.003]}
        rotation={[0, -0.605, 0]}
        scale={[0.121, 0.015, 0.121]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={textureFloorMaterial}
      />
    </group>
  );
}

useGLTF.preload('models/sceene.glb');
