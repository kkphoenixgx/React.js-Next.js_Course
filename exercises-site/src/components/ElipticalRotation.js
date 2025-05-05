import React, { useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';
import { Text, Trail } from '@react-three/drei';

const EllipticalRotation = ({ a, b, c, speed, text, path, rotateInZAxle }) => {
  const groupRef = useRef();
  const navigate = useNavigate();

  const initialTheta = useMemo(() => Math.random() * Math.PI * 2, []);

  const calculateEllipsePoint = (theta) => {
    const x = a * Math.cos(theta);
    const y = b * Math.sin(theta);
    const z = c * Math.sin(theta);
    return { x, y, z };
  };

  const handleClick = () => {
    navigate(path);
  };

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.z += speed;
    if (rotateInZAxle) {
      group.rotation.y += speed * 0.5;
    }

    const theta = group.rotation.z + initialTheta;
    const { x, y, z } = calculateEllipsePoint(theta);
    group.position.set(x, y, z);
  });

  return (
    <Trail
      width={0.5}
      length={3}
      decay={0.5}
      color="orange"
      attenuation={(t) => Math.pow(t, 2)}
    >
      <group ref={groupRef}>
        <Text
          scale={[7, 7, 7]}
          color="#ffccaa"
          anchorX="center"
          anchorY="middle"
          onClick={handleClick}
        >
          {text}
        </Text>
      </group>
    </Trail>
  );
};

export default EllipticalRotation;
