import React from 'react';

const Video = () => {
  return (
    <mesh position={[-0.332, 0.659, 0.841]} rotation={[0.13, 0, 0]}>
      <planeGeometry args={screen} />
      <meshStandardMaterial side={THREE.DoubleSide}>
        <primitive attach='map' object={video} />
      </meshStandardMaterial>
      <Html
        className='content'
        rotation-y={-Math.PI}
        position={[-0.0, 0.0, -0.001]}
        transform
        occlude
      >
        <iframe
          title='video'
          src={url}
          frameBorder='0'
          allowFullScreen
          loading='lazy'
          className='video'
        ></iframe>
      </Html>
    </mesh>
  );
};

export default Video;



const { x, y, z } = useControls({
  x: {
    value: -5.7,
    min: -10,
    max: 10,
    step: 0.1,
  },
  y: {
    value: 2.3,
    min: -10,
    max: 10,
    step: 0.1,
  },
  z: {
    value: -10.0,
    min: -10,
    max: 10,
    step: 0.1,
  },
});

useEffect(() => {
  setPosition([x, y, z]);
}, [x, y, z]);

const { rx, ry, rz } = useControls({
  rx: {
    value: 0.8,
    min: -10,
    max: 10,
    step: 0.01,
  },
  ry: {
    value: -0.1,
    min: -10,
    max: 10,
    step: 0.01,
  },
  rz: {
    value: -0,
    min: -10,
    max: 10,
    step: 0.01,
  },
});

useEffect(() => {
  setRotation([rx, ry, rz]);
}, [rx, ry, rz]);

const { fovValue } = useControls({
  fovValue: {
    value: 3,
    min: 0,
    max: 100,
    step: 1,
  },
});

useEffect(() => {
  setFov(fovValue);
}, [fovValue]);

const { roomX, roomY, roomZ } = useControls({
  roomX: {
    value: 0.4,
    min: -10,
    max: 10,
    step: 0.1,
  },
  roomY: {
    value: -0.8,
    min: -10,
    max: 10,
    step: 0.1,
  },
  roomZ: {
    value: 0,
    min: -10,
    max: 10,
    step: 0.1,
  },
});