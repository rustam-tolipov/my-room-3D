import { PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';
import React, { useEffect, useRef, useState } from 'react';

const MyCamera = () => {
  const cameraRef = useRef();

  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  // const { x, y, z } = useControls({
  //   x: {
  //     value: 3.8,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   y: {
  //     value: 1.9,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   z: {
  //     value: -10.0,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // const { rx, ry, rz } = useControls({
  //   rx: {
  //     value: 0.8,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   ry: {
  //     value: -0.1,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   rz: {
  //     value: -0,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  // });

  // const { fovValue } = useControls({
  //   fovValue: {
  //     value: 14,
  //     min: 0,
  //     max: 100,
  //     step: 1,
  //   },
  // });

  const [fov, setFov] = useState(15);

  useEffect(() => {
    setPosition([x, y, z]);
  }, [x, y, z]);

  useEffect(() => {
    setRotation([rx, ry, rz]);
  }, [rx, ry, rz]);

  useEffect(() => {
    setFov(fovValue);
  }, [fovValue]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={position}
        rotation={rotation}
        fov={fov}
        ref={cameraRef}
      />
    </>
  );
};

export default MyCamera;
