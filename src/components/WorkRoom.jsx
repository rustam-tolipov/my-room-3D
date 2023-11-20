import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei';

import { useControls } from 'leva';

import * as THREE from 'three';

import url from '../assets/video.mp4';
import imgUrl from '../assets/screenshot.png';
import { useLoader } from '@react-three/fiber';

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

  const [screen, setScreen] = useState([0, 0, 0]);

  // const { screenx, screeny, screenz } = useControls({
  //   screenx: {
  //     value: -0.44,
  //     min: -10,
  //     max: 10,
  //     step: 0.001,
  //   },
  //   screeny: {
  //     value: 0.275,
  //     min: -10,
  //     max: 10,
  //     step: 0.001,
  //   },
  //   screenz: {
  //     value: 1,
  //     min: -10,
  //     max: 10,
  //     step: 0.001,
  //   },
  // });

  useEffect(() => {
    setScreen([screenx, screeny, screenz]);
  }, [screenx, screeny, screenz]);

  return (
    <group {...props} dispose={null} ref={roomRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={textureSetMaterial}
        position={[1.196, 0.094, 0.373]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top.geometry}
        material={textureSetMaterial}
        position={[1.196, 0.347, 0.963]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cusion.geometry}
        material={textureSetMaterial}
        position={[0.233, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item.geometry}
        material={textureSetMaterial}
        position={[1.516, 0.456, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow.geometry}
        material={textureSetMaterial}
        position={[1.384, 0.274, 0.811]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item001.geometry}
        material={textureSetMaterial}
        position={[1.07, 0.356, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item004.geometry}
        material={textureSetMaterial}
        position={[1.34, 0.356, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item003.geometry}
        material={textureSetMaterial}
        position={[1.203, 0.456, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item002.geometry}
        material={textureSetMaterial}
        position={[0.83, 0.356, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item005.geometry}
        material={textureSetMaterial}
        position={[1.57, 0.356, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item006.geometry}
        material={textureSetMaterial}
        position={[1.516, 0.256, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item007.geometry}
        material={textureSetMaterial}
        position={[0.882, 0.256, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item008.geometry}
        material={textureSetMaterial}
        position={[1.203, 0.256, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow001.geometry}
        material={textureSetMaterial}
        position={[0.99, 0.274, 0.811]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_item009.geometry}
        material={textureSetMaterial}
        position={[0.883, 0.456, 0.959]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood.geometry}
        material={materials.woods}
        position={[0.238, 0, 0]}
        scale={[1.118, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carpet.geometry}
        material={textureSetMaterial}
        position={[1.065, 0.009, -0.851]}
        scale={[1.396, 0.21, 1.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={textureSetMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk.geometry}
        material={textureSetMaterial}
        position={[-0.759, 0, 0.126]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk001.geometry}
        material={textureSetMaterial}
        position={[-0.759, -0.003, 0.126]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk002.geometry}
        material={textureSetMaterial}
        position={[-0.759, -0.003, 0.126]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk003.geometry}
        material={textureSetMaterial}
        position={[-0.759, 0, 0.126]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk004.geometry}
        material={textureSetMaterial}
        position={[-0.759, -0.003, 0.122]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk005.geometry}
        material={textureSetMaterial}
        position={[-0.759, -0.003, 0.126]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk006.geometry}
        material={textureSetMaterial}
        position={[-0.759, 0, 0.126]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofa_1.geometry}
        material={textureSetMaterial}
        position={[0, 0, -0.274]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofa_2.geometry}
        material={textureSetMaterial}
        position={[0, 0, -0.274]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofa_3.geometry}
        material={textureSetMaterial}
        position={[0, 0, -0.186]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tv_stand.geometry}
        material={textureSetMaterial}
        position={[-0.703, 0.068, -0.913]}
        scale={[1, 0.628, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={textureSetMaterial}
        position={[-0.885, 0.798, 0.586]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={textureSetMaterial}
        position={[-0.885, 0.798, 0.353]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={textureSetMaterial}
        position={[-0.885, 0.798, 0.815]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={textureSetMaterial}
        position={[-0.885, 0.644, 0.586]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={textureSetMaterial}
        position={[-0.885, 0.644, 0.353]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={textureSetMaterial}
        position={[-0.885, 0.644, 0.815]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tv.geometry}
        // material={textureSetMaterial}
        position={[-0.834, 0.35, -0.913]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.709}
      >
        <meshStandardMaterial
          attach='material'
          color='#000000'
          metalness={0.1}
          roughness={0.5}
        />
      </mesh>

      <mesh
        position={[-0.832, 0.35, -0.913]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.709}
      >
        {/* -0.92 0.56*/}
        <planeGeometry args={[-0.95, 0.58, 1]} />
        <meshStandardMaterial side={THREE.DoubleSide}>
          <primitive attach='map' object={video} />
        </meshStandardMaterial>
      </mesh>
      <group
        position={[-0.687, 0.417, 0.822]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.298, 0.298, 0.39]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={textureSetMaterial}
        />
      </group>
      <group
        position={[-0.687, 0.43, 0.822]}
        rotation={[Math.PI, -0.154, Math.PI]}
        scale={[0.277, 0.277, 0.362]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={textureSetMaterial}
        />
      </group>
      <group
        position={[-0.687, 0.443, 0.822]}
        rotation={[Math.PI, -0.085, Math.PI]}
        scale={[0.277, 0.277, 0.362]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={textureSetMaterial}
        />
      </group>
      <group
        position={[-0.689, 0.209, 0.614]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={[0.298, 0.298, 0.39]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_2.geometry}
          material={textureSetMaterial}
        />
      </group>
      <group
        position={[-0.689, 0.223, 0.614]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={[0.298, 0.298, 0.39]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={textureSetMaterial}
        />
      </group>
      <group
        position={[-0.689, 0.238, 0.614]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={[0.298, 0.298, 0.39]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={textureSetMaterial}
        />
      </group>
      <group
        position={[-0.689, 0.252, 0.614]}
        rotation={[-Math.PI, 0.015, -Math.PI]}
        scale={[0.298, 0.298, 0.39]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={textureSetMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={textureSetMaterial}
        />
      </group>
      <group
        position={[-0.017, 0.419, 0.678]}
        rotation={[-Math.PI, 0.735, -Math.PI]}
      >
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
          geometry={nodes.Cube015_6.geometry}
          material={textureSetMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={textureSetMaterial}
        position={[0.014, 0.418, 0.694]}
        rotation={[-Math.PI, 0.735, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={textureSetMaterial}
        position={[-0.332, 0.656, 0.877]}
        rotation={[-0.217, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={textureSetMaterial}
        position={[-0.332, 0.668, 0.898]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={textureSetMaterial}
        position={[-0.332, 0.482, 0.916]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={textureSetMaterial}
        position={[-0.332, 0.656, 0.877]}
        rotation={[-0.217, 0, 0]}
      >
        <meshStandardMaterial
          attach='material'
          color='#000000'
          metalness={1}
          roughness={0.5}
        />
      </mesh>
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
        geometry={nodes.Plane003.geometry}
        material={textureSetMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_1.geometry}
        material={textureSetMaterial}
      />
    </group>
  );
}

useGLTF.preload('models/working_room.glb');
