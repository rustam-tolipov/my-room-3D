import React, { useEffect, useRef, useState } from 'react';
import {
  Html,
  Torus,
  useGLTF,
  useTexture,
  useVideoTexture,
} from '@react-three/drei';

import { useControls } from 'leva';

import * as THREE from 'three';

import url from '../assets/video.mp4';
import imgUrl from '../assets/screenshot.png';

export function WorkRoom(props) {
  const roomRef = useRef();
  const { nodes, materials } = useGLTF('models/working_room.glb');

  const textureSet = useTexture('textures/baked_set_4k.jpg');
  textureSet.encoding = THREE.sRGBEncoding;
  textureSet.flipY = false;

  const textureSetMaterial = new THREE.MeshStandardMaterial({
    map: textureSet,
  });

  const video = useVideoTexture(url);
  const imageTexture = useTexture(imgUrl);

  const [screen, setScreen] = useState([-0.44, 0.275, 1]);

  const { screenx, screeny, screenz } = useControls({
    // args={[0.4, 0.3, 1]}
    screenx: {
      value: -0.44,
      min: -10,
      max: 10,
      step: 0.001,
    },
    screeny: {
      value: 0.275,
      min: -10,
      max: 10,
      step: 0.001,
    },
    screenz: {
      value: 1,
      min: -10,
      max: 10,
      step: 0.001,
    },
  });

  useEffect(() => {
    setScreen([screenx, screeny, screenz]);
  }, [screenx, screeny, screenz]);

  let roomTargetPosition = [2.9, 3.5, -6.6];
  let roomTargetRotation = [0, -0.4, 0];

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.laptop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_1.geometry}
        material={materials.keyboard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_2.geometry}
        material={materials.sceen}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={textureSetMaterial}
        position={[0.869, -0.035, -0.609]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.carpet.geometry}
          material={textureSetMaterial}
          position={[0.196, 0.044, -0.242]}
        />
        <group position={[-0.803, 0.825, 0.735]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={textureSetMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={textureSetMaterial}
            onClick={() => {
              props.setCameraTarget('back');
            }}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.woods.geometry}
          material={textureSetMaterial}
          position={[-0.397, 0.034, 0.366]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed_main.geometry}
        material={textureSetMaterial}
        position={[1.196, 0.094, 0.373]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cusion.geometry}
          material={textureSetMaterial}
          position={[0, 0.12, 0]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow.geometry}
          material={textureSetMaterial}
          position={[-0.438, 0.18, 0.188]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow001.geometry}
          material={textureSetMaterial}
          position={[-0.438, 0.18, -0.206]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={textureSetMaterial}
          position={[0.114, 0.156, 0.013]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top.geometry}
          material={textureSetMaterial}
          position={[-0.59, 0.246, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.348, 0.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item001.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.248, -0.126]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item002.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.248, -0.366]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item003.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.348, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item004.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.248, 0.144]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item005.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.248, 0.374]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item006.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.148, 0.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item007.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.148, -0.314]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item008.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.148, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top_item009.geometry}
          material={textureSetMaterial}
          position={[-0.586, 0.348, -0.313]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofa.geometry}
        material={textureSetMaterial}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
          props.setCameraTarget('sofa');
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sofa_1.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sofa_2.geometry}
          material={textureSetMaterial}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tv_stand.geometry}
        material={materials.sofa}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tv.geometry}
          material={textureSetMaterial}
        />
        <mesh
          position={[-0.832, 0.35, -0.913]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.709}
        >
          <planeGeometry args={[-0.95, 0.58, 1]} />
          <meshStandardMaterial side={THREE.DoubleSide}>
            <primitive attach='map' object={video} />
          </meshStandardMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tv_bottom.geometry}
          material={textureSetMaterial}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame.geometry}
        material={textureSetMaterial}
        position={[-0.885, 0.798, 0.586]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frame001.geometry}
          material={textureSetMaterial}
          position={[-0.233, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frame002.geometry}
          material={textureSetMaterial}
          position={[0.229, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frame003.geometry}
          material={textureSetMaterial}
          position={[0, -0.155, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frame004.geometry}
          material={textureSetMaterial}
          position={[-0.233, -0.155, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frame005.geometry}
          material={textureSetMaterial}
          position={[0.229, -0.155, 0]}
        />
      </mesh>
      <group position={[-0.663, 0.138, -0.601]} rotation={[0, 0.134, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_3.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_4.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_5.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handheld001.geometry}
          material={textureSetMaterial}
          position={[-0.033, -0.001, 0.008]}
        />
      </group>
      <mesh position={[-0.332, 0.656, 0.874]} rotation={[0, 0, 0]}>
        <planeGeometry args={screen} />
        {/* <meshStandardMaterial side={THREE.DoubleSide}>
          <primitive attach='map' object={video} />
        </meshStandardMaterial> */}
        <meshBasicMaterial map={imageTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor.geometry}
        material={materials.desktop}
        position={[-0.332, 0.656, 0.877]}
        rotation={[-0.217, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen.geometry}
          material={materials.desktop}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stand.geometry}
          material={materials.desktop}
          position={[0, -0.178, 0]}
          rotation={[0.217, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stand001.geometry}
          material={materials.desktop}
          position={[0, 0.007, 0.023]}
          rotation={[0.217, 0, 0]}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk006.geometry}
        material={materials.desk}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk.geometry}
          material={materials.desk}
          position={[-0.759, 0, 0.126]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk001.geometry}
          material={materials.desk}
          position={[-0.759, -0.003, 0.126]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk002.geometry}
          material={materials.desk}
          position={[-0.759, -0.003, 0.126]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk003.geometry}
          material={materials.desk}
          position={[-0.759, 0, 0.126]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk004.geometry}
          material={materials.desk}
          position={[-0.759, -0.003, 0.122]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk005.geometry}
          material={materials.desk}
          position={[-0.759, -0.003, 0.126]}
          rotation={[0, 1.571, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials.chair}
        position={[-0.43, 0.065, 0.48]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.32}
      >
        <group position={[0.001, 0.237, 0.11]} scale={1.19}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube069.geometry}
            material={materials.chair}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube069_1.geometry}
            material={materials.chair}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handle.geometry}
          material={materials.chair}
          position={[-0.098, 0.172, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sit.geometry}
          material={materials.chair}
          position={[0, 0.139, 0.001]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.laptop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_1.geometry}
        material={materials.keyboard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_2.geometry}
        material={materials.sceen}
      />
    </group>
  );
}

useGLTF.preload('models/working_room.glb');
