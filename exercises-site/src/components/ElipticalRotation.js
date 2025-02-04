import React, { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';
import {Text } from '@react-three/drei'


export const EllipticalRotation = ({ a, b, c, speed, text, path, rotateInZAxle }) => {
  const groupRef = useRef();
  const navigate = useNavigate();

  const calculateEllipsePoint = (theta) => {
    const x = a * Math.cos(theta);
    const y = b * Math.sin(theta);
    const z = c * Math.sin(theta); // Aumenta o raio no eixo z
    return { x, y, z };
  };

  const handleClick = () => {
    navigate(path);
  }

  useFrame(() => {
    
    groupRef.current.rotation.z += speed;
    if(rotateInZAxle){
      groupRef.current.rotation.y += speed * 0.5; 
    }

    // Calcula a posição da elipse
    const theta = groupRef.current.rotation.z;
    const { x, y, z } = calculateEllipsePoint(theta);

    // Define a nova posição do objeto
    groupRef.current.position.set(x, y, z);
  });

  return (
    <group ref={groupRef}>
      <Text
        scale={[7, 7, 7]}
        color="#81dbff"
        anchorX="center"
        anchorY="middle" 
        onClick={handleClick}
      >
        {text}
      </Text>
    </group>
  );
};
