import { OrbitControls } from '@react-three/drei';

import { useControls } from 'leva';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import * as THREE from 'three';
import { WorkRoom } from './WorkRoom';
import MyCamera from './Camera';
import { useFrame } from '@react-three/fiber';

export const Experience = () => {
  const lightRef = useRef();
  const controlsRef = useRef();
  const [roomPosition, setRoomPosition] = useState([-0.17, -0.5, 0]);
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

  const [cameraTarget, setCameraTarget] = useState('base');
  const tvTarget = {
    position: [1.161860729909423, 0.3339742322090275, -1.80096938648391],
    rotation: [-2.766601164555171, 1.0314131631683943, 2.81588739972729],
    currentRotation: {
      _x: -2.9538307070761998,
      _y: 0.3572981143147835,
      _z: 3.0752387968622443,
    },
    currentPosition: {
      x: 3.799999999999998,
      y: 1.9000000000000006,
      z: -10,
    },
  };

  useFrame(() => {
    controlsRef.current.update();
  });

  useFrame(() => {
    if (cameraTarget === 'sofa') {
      controlsRef.current.object.position.lerp(
        new THREE.Vector3(...tvTarget.position),
        0.05
      );

      controlsRef.current.object.rotation.set(...tvTarget.rotation);
    }
  });

  useEffect(() => {
    if (cameraTarget === 'back') {
      controlsRef.current.object.position.set(
        tvTarget.currentPosition.x,
        tvTarget.currentPosition.y,
        tvTarget.currentPosition.z
      );
    }
  }, [cameraTarget]);

  return (
    <>
      <MyCamera cameraTarget={cameraTarget} setCameraTarget={setCameraTarget} />
      <OrbitControls
        ref={controlsRef}
        minAzimuthAngle={2}
        maxAzimuthAngle={3.5}
        minPolarAngle={0}
        maxPolarAngle={1.5}
        enableZoom={true}
        enablePan={false}
        zoomSpeed={0.2}
        panSpeed={0.2}
        rotateSpeed={0.2}
        minDistance={1.5}
        maxDistance={10}
        dampingFactor={0.05}
        enableDamping={true}
        zoomDampingFactor={1}
      />
      <ambientLight color='#51E2F5' intensity={1} />

      <WorkRoom
        position={roomPosition}
        rotation={roomRotation}
        cameraTarget={cameraTarget}
        setCameraTarget={setCameraTarget}
      />
    </>
  );
};
