import { View, Dimensions } from 'react-native';
import React from 'react'
import { Canvas, Rect, LinearGradient, vec } from '@shopify/react-native-skia';
import Wave from './src/components/Wave';

const { width, height } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={{ width, height }}>
      <Canvas style={{ width, height }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height)}
            colors={["rgb(255, 35, 79)", "rgb(252, 176, 171)"]}
          />
        </Rect>
        <Rect x={0} y={height / 2} width={width} height={height / 2}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height / 2)}
            colors={["rgb(255, 149, 64)", "rgb(255, 177, 75)"]}
          />
        </Rect>
        <Wave />
      </Canvas>
    </View>
  );
}
