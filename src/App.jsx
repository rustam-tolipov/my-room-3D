import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Suspense, useEffect, useState } from 'react';

import rotate from './assets/rotate.mp4';
import { Html } from '@react-three/drei';

function App() {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.orientation === 90 || window.orientation === -90) {
        setIsLandscape(true);
      } else {
        setIsLandscape(false);
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <>
      <Canvas shadows colorManagement gl={{ antialias: true }}>
        <color attach='background' args={['#000']} />
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
      </Canvas>
      <div className='rotate-alert'>
        <video
          src={rotate}
          autoPlay
          muted
          loop
          style={{ display: isLandscape ? 'none' : 'block' }}
        />
      </div>
    </>
  );
}

const LoadingFallback = () => {
  return (
    <Html center>
      <div className='loading'>
        <span className='loading-text'>Loading...</span>
      </div>
    </Html>
  );
};

export default App;
