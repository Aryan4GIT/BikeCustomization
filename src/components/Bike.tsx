import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '../store';

export const Bike: React.FC = () => {
  const { 
    frameColor,
    wheelColor,
    handlebarColor,
    seatColor,
    batteryColor,
    motorColor,
    wheelSize,
    frameType,
    handlebarType,
    seatType,
    batteryType,
    motorPower
  } = useStore();

  const group = useRef<THREE.Group>(null);
  const wheelScale = wheelSize / 29;

  // Fixed frame geometry configuration
  const getFrameGeometry = () => {
    const geometries = {
      Mountain: { 
        topTubeLength: 1.1,
        seatAngle: -0.15,
        chainStayLength: 0.65,
        topTubeThickness: 0.045,
        downTubeThickness: 0.05,
        seatStayThickness: 0.035,
        topTubePosition: [0, 0.5, 0],
        seatTubePosition: [0.5, 0.3, 0]
      },
      City: { 
        topTubeLength: 1.0,
        seatAngle: -0.2,
        chainStayLength: 0.6,
        topTubeThickness: 0.04,
        downTubeThickness: 0.045,
        seatStayThickness: 0.03,
        topTubePosition: [0, 0.45, 0],
        seatTubePosition: [0.45, 0.25, 0]
      },
      Folding: { 
        topTubeLength: 0.9,
        seatAngle: -0.25,
        chainStayLength: 0.55,
        topTubeThickness: 0.035,
        downTubeThickness: 0.04,
        seatStayThickness: 0.025,
        topTubePosition: [0, 0.4, 0],
        seatTubePosition: [0.4, 0.2, 0]
      },
      Cargo: { 
        topTubeLength: 1.2,
        seatAngle: -0.1,
        chainStayLength: 0.7,
        topTubeThickness: 0.05,
        downTubeThickness: 0.055,
        seatStayThickness: 0.04,
        topTubePosition: [0, 0.55, 0],
        seatTubePosition: [0.6, 0.35, 0]
      }
    }[frameType] || {
      topTubeLength: 1.0,
      seatAngle: -0.15,
      chainStayLength: 0.6,
      topTubeThickness: 0.04,
      downTubeThickness: 0.045,
      seatStayThickness: 0.03,
      topTubePosition: [0, 0.5, 0],
      seatTubePosition: [0.5, 0.3, 0]
    };

    return geometries;
  };

  // Fixed seat geometry
  const getSeatGeometry = () => {
    return {
      Sport: { width: 0.25, length: 0.4, padding: 0.02, height: 0.06 },
      Comfort: { width: 0.3, length: 0.5, padding: 0.03, height: 0.08 },
      Cruiser: { width: 0.35, length: 0.55, padding: 0.04, height: 0.1 },
      Ergonomic: { width: 0.28, length: 0.48, padding: 0.03, height: 0.09 }
    }[seatType] || { 
      width: 0.25, 
      length: 0.45, 
      padding: 0.02, 
      height: 0.06 
    };
  };

  // Enhanced Seat Post with proper connections
  const SeatPost = () => {
    const seatGeometry = getSeatGeometry();
    const frameGeometry = getFrameGeometry();

    return (
      <group position={frameGeometry.seatTubePosition}>
        {/* Seat post rod */}
        <mesh rotation={[0, 0, Math.PI / 2 - 0.2]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5, 16]} />
          <meshStandardMaterial color="#666" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Seat base */}
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[
            seatGeometry.length, 
            seatGeometry.height, 
            seatGeometry.width
          ]} />
          <meshStandardMaterial color={seatColor.color} metalness={0.3} roughness={0.7} />
        </mesh>

        {/* Seat padding */}
        <mesh position={[0, seatGeometry.height/2 + 0.01, 0]}>
          <boxGeometry args={[
            seatGeometry.length - seatGeometry.padding, 
            0.02, 
            seatGeometry.width - seatGeometry.padding
          ]} />
          <meshStandardMaterial color="#333" metalness={0.4} roughness={0.8} />
        </mesh>
      </group>
    );
  };

  // Enhanced wheel component
  const Wheel = ({ position }: { position: [number, number, number] }) => (
    <group position={position} scale={[wheelScale, wheelScale, wheelScale]}>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[0.4, 0.06, 16, 32]} />
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.5} />
      </mesh>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[0.4, 0.05, 16, 32]} />
        <meshStandardMaterial color={wheelColor.color} metalness={0.4} roughness={0.6} />
      </mesh>
      {Array.from({ length: 36 }).map((_, i) => (
        <mesh key={`spoke-${i}`} rotation={[0, 0, (Math.PI * i) / 18]}>
          <cylinderGeometry args={[0.008, 0.008, 0.78, 8]} />
          <meshStandardMaterial color="#aaa" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#444" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );


  // Detailed crankset
  const Crankset = () => (
    <group position={[0.1, -0.3, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.015, 16, 32]} />
        <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
      </mesh>
      {[1, -1].map((sign) => (
        <mesh key={sign} position={[0.12 * sign, -0.12, 0]} rotation={[0, 0, sign * Math.PI / 4]}>
          <boxGeometry args={[0.25, 0.03, 0.015]} />
          <meshStandardMaterial color="#444" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      <mesh position={[0.15, -0.15, 0.07]}>
        <boxGeometry args={[0.08, 0.02, 0.05]} />
        <meshStandardMaterial color="#333" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[-0.15, 0.15, -0.07]}>
        <boxGeometry args={[0.08, 0.02, 0.05]} />
        <meshStandardMaterial color="#333" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );

  // Motor with cooling fins
  const Motor = () => {
    const motorSize = 0.15 * (0.8 + (motorPower / 500 * 0.4));
    
    return (
      <group position={[0.8, -0.3, 0.1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[motorSize, motorSize, 0.15, 24]} />
          <meshStandardMaterial color={motorColor.color} metalness={0.9} roughness={0.1} />
        </mesh>
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={`fin-${i}`} rotation={[0, (Math.PI * i) / 6, 0]}>
            <boxGeometry args={[0.02, 0.12, motorSize * 1.2]} />
            <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
        <mesh position={[0, 0.1, 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.01, 0.01, 0.7, 8]} />
          <meshStandardMaterial color="#222" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
    );
  };

  // Handlebar controls
  const Handlebar = () => {
    const geometry = {
      Cruiser: { width: 0.8, rise: 0.15 },
      Flat: { width: 0.7, rise: 0 },
      Riser: { width: 0.75, rise: 0.1 },
      Bullhorn: { width: 0.7, rise: 0.05 }
    }[handlebarType];

    return (
      <group position={[-0.6, 0.5, 0]}>
        <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.025, 0.025, geometry.width, 16]} />
          <meshStandardMaterial color={handlebarColor.color} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.25 + geometry.rise, 0.35]}>
          <boxGeometry args={[0.1, 0.05, 0.08]} />
          <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.25 + geometry.rise, 0.36]}>
          <boxGeometry args={[0.08, 0.03, 0.01]} />
          <meshStandardMaterial color="#00aaff" emissive="#00aaff" emissiveIntensity={0.3} />
        </mesh>
      </group>
    );
  };

  // Battery pack
  const Battery = () => {
    const geometry = {
      Integrated: { size: [0.5, 0.1, 0.15], position: [0.1, 0.3, 0] },
      External: { size: [0.4, 0.2, 0.15], position: [0.3, 0.1, 0] },
      Dual: { size: [0.3, 0.15, 0.2], position: [0.2, 0.2, 0] },
      Removable: { size: [0.35, 0.18, 0.16], position: [0.3, 0.0, 0] }
    }[batteryType];

    return (
      <group position={geometry.position}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={geometry.size} />
          <meshStandardMaterial color={batteryColor.color} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, geometry.size[1]/2 + 0.01, 0]}>
          <boxGeometry args={[geometry.size[0] * 0.8, 0.02, geometry.size[2] * 0.8]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[geometry.size[0]/2 - 0.05, geometry.size[1]/2 + 0.02, 0]}>
          <boxGeometry args={[0.05, 0.01, 0.05]} />
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
        </mesh>
      </group>
    );
  };

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
    }
  });

  const frameGeometry = getFrameGeometry();

  return (
    <group ref={group} position={[0, -0.5, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Frame */}
      <group>
        {/* Down tube */}
        <mesh position={[-0.5, 0.4, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[
            frameGeometry.downTubeThickness, 
            frameGeometry.downTubeThickness, 
            frameGeometry.topTubeLength, 
            16
          ]} />
          <meshStandardMaterial color={frameColor.color} metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Curved top tube */}
        <mesh position={frameGeometry.topTubePosition}>
          <tubeGeometry args={[
            new THREE.QuadraticBezierCurve3(
              new THREE.Vector3(-0.6, 0.3, 0),
              new THREE.Vector3(0, 0.55, 0),
              new THREE.Vector3(0.5, 0.35, 0)
            ), 
            32, 
            frameGeometry.topTubeThickness
          ]} />
          <meshStandardMaterial color={frameColor.color} metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Seat stays */}
        <group position={frameGeometry.seatTubePosition}>
          {[-0.1, 0.1].map(z => (
            <mesh key={z} rotation={[0, z * 0.4, Math.PI / 2 - 0.2]}>
              <cylinderGeometry args={[
                frameGeometry.seatStayThickness, 
                frameGeometry.seatStayThickness, 
                frameGeometry.chainStayLength, 
                16
              ]} />
              <meshStandardMaterial color={frameColor.color} metalness={0.6} roughness={0.2} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Other components... */}
      <Wheel position={[-0.8, -0.3, 0]} />
      <Wheel position={[0.8, -0.3, 0]} />
      <Motor />
      <SeatPost />
      <Crankset />
      <Handlebar />
      <Battery />

      {/* Lights */}
      <mesh position={[-0.8, 0.3, 0]}>
        <cylinderGeometry args={[0.04, 0.03, 0.05, 16]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.8, 0.3, 0]}>
        <cylinderGeometry args={[0.03, 0.02, 0.04, 16]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f00" emissive="#f00" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};