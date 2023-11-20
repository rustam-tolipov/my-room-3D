import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function Room(props) {
  const { nodes, materials } = useGLTF('models/dark-gray-room.glb');
  const textureRoom = useTexture('textures/baked-room.jpg');
  textureRoom.encoding = THREE.sRGBEncoding;
  textureRoom.flipY = false;

  const textureTable = useTexture('textures/baked-table.jpg');
  textureTable.encoding = THREE.sRGBEncoding;
  textureTable.flipY = false;

  const textureTV = useTexture('textures/baked-tv.jpg');
  textureTV.encoding = THREE.sRGBEncoding;
  textureTV.flipY = false;

  const textureCubeMaterial = new THREE.MeshStandardMaterial({
    map: textureRoom,
  });

  const textureTableMaterial = new THREE.MeshStandardMaterial({
    map: textureTable,
  });

  const textureTVMaterial = new THREE.MeshStandardMaterial({
    map: textureTV,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={textureCubeMaterial}
        scale={[1, 0.9, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={textureTableMaterial}
        position={[0.636, 0.419, 0]}
        scale={[0.671, 1, 1]}
      />
      <group position={[0.637, 0.734, 0.026]} scale={[0.007, 0.16, 0.255]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={textureTVMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={textureTVMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/dark-gray-room.glb');
