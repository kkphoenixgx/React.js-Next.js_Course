import React, { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';
import {Text } from '@react-three/drei'


export const EllipticalRotation = ({ a, b, speed, text, path, rotateInZAxle }) => {
  const groupRef = useRef();
  const navigate = useNavigate();

  const calculateEllipsePoint = (theta) => {
    const x = a * Math.cos(theta);
    const y = b * Math.sin(theta);
    return { x, y };
  };

  const handleClick = () => {
    navigate(path);
  }

  useFrame(() => {
    
    if(rotateInZAxle){
      groupRef.current.rotation.y += speed * 0.5; 
    }

    groupRef.current.rotation.z += speed;

    const theta = groupRef.current.rotation.z;
    const { x, y } = calculateEllipsePoint(theta);

    groupRef.current.position.set(x, y, 0);
  });

  return (
    <group ref={groupRef}>
      <Text
        scale={[10, 10, 10]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        onClick={handleClick}
      >
        {text}
      </Text>
    </group>
  );
};
