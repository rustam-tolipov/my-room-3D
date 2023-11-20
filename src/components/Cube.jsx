import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

import * as THREE from 'three';

export function Cube(props) {
  const { nodes, materials } = useGLTF('models/cube.glb');
  const texutreCube = useTexture('textures/baked-cube.jpg');
  texutreCube.encoding = THREE.sRGBEncoding;
  texutreCube.flipY = false;

  const textureFloor = useTexture('textures/baked-floor.jpg');
  textureFloor.encoding = THREE.sRGBEncoding;
  textureFloor.flipY = false;

  const textureCubeMaterial = new THREE.MeshStandardMaterial({
    map: texutreCube,
  });

  const textureFloorMaterial = new THREE.MeshStandardMaterial({
    map: textureFloor,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={textureCubeMaterial}
        position={[0, 0.092, 0]}
        scale={0.093}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={textureFloorMaterial}
        scale={1.733}
      />
    </group>
  );
}

useGLTF.preload('/cube.glb');
