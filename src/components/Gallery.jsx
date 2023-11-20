import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

import * as THREE from 'three';

export function Gallery(props) {
  const { nodes, materials } = useGLTF('models/work_gallery.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.wall}
        position={[0.022, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.item}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_1.geometry}
        material={materials.frame}
      />
    </group>
  );
}

useGLTF.preload('models/work_gallery.glb');
