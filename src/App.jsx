import { Canvas, useThree } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { useControls } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import {
  Environment,
  Lightformer,
  PerspectiveCamera,
  useHelper,
} from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { Physics } from '@react-three/rapier';

function App() {
  return (
    <Canvas shadows colorManagement gl={{ antialias: false }}>
      <color attach='background' args={['#000']} />
      <Environments />
      <Suspense>
        <Physics>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

function Environments(params) {
  return (
    <Environment resolution={32}>
      {/* <Lightformer position={[10, 1, 10]} scale={10} intensity={40} /> */}
      {/* <Lightformer
        position={[0, 0, -1]}
        scale={0.1}
        color='#fff'
        intensity={100}
      /> */}
      <Lightformer position={[1, 1, 1]} scale={10} intensity={0.5} />
    </Environment>
  );
}

export default App;
