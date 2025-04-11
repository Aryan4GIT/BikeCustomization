import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Header } from './components/Header';


const App: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden px-6 py-10">
        <div className="w-full h-[500px] rounded-xl shadow-2xl overflow-hidden">
          <Canvas
            shadows
            camera={{ position: [3, 2, 5], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <color attach="background" args={["#0a0a0a"]} />
            <ambientLight intensity={0.6} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.3} 
              intensity={1.5} 
              castShadow 
            />
            <Environment preset="warehouse" />
            <OrbitControls enablePan={false} enableZoom={true} />

            <RotatingBike />
          </Canvas>
        </div>

        <div className="mt-10 text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-white">Revolutionize Your Ride with Our 3D Electric Bike</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Experience the future of commuting with our fully electric, customizable, and rotatable 3D bike model.
            Built for performance, styled for excellence. Modify parts, choose colors, and explore the build — all in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
