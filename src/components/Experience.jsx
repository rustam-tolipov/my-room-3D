import { OrbitControls } from '@react-three/drei';

import { useControls } from 'leva';
import { useEffect, useState } from 'react';
import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { WorkRoom } from './WorkRoom';
import MyCamera from './Camera';

export const Experience = () => {
  const lightRef = useRef();

  const [roomPosition, setRoomPosition] = useState([-0.2, -0.5, 0]);
  const [roomRotation, setRoomRotation] = useState([0, 0.5, 0]);

  // const { roomX, roomY, roomZ } = useControls({
  //   roomX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   roomY: {
  //     value: -0.5,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   roomZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // const { roomRX, roomRY, roomRZ } = useControls({
  //   roomRX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   roomRY: {
  //     value: 0.5,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   roomRZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // useEffect(() => {
  //   setRoomPosition([roomX, roomY, roomZ]);
  // }, [roomX, roomY, roomZ]);

  // useEffect(() => {
  //   setRoomRotation([roomRX, roomRY, roomRZ]);
  // }, [roomRX, roomRY, roomRZ]);

  return (
    <>
      <MyCamera />
      <OrbitControls
        // minAzimuthAngle={1.5}
        // maxAzimuthAngle={3.2}
        // minPolarAngle={0}
        // maxPolarAngle={1.5}
        // enableZoom={true}
        // enablePan={false}
        // zoomSpeed={0.2}
        // panSpeed={0.2}
        // rotateSpeed={0.2}
        // minDistance={1.5}
        // maxDistance={10}
        // dampingFactor={0.05}
        // enableDamping={true}
        // zoomDampingFactor={1}
      />
      <ambientLight color='#51E2F5' intensity={1} />
      <WorkRoom position={roomPosition} rotation={roomRotation} />
    </>
  );
};
