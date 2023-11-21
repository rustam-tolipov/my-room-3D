import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Suspense } from 'react';

function App() {
  return (
    <Canvas shadows colorManagement gl={{ antialias: false }}>
      <color attach='background' args={['#000']} />
      <Suspense>
        <Experience />
      </Suspense>
    </Canvas>
  );
}

export default App;
