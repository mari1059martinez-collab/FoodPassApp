// App.tsx

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PointsScreen from './src/screens/PointsScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <PointsScreen />
    </SafeAreaProvider>
  );
}