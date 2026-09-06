import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Soma({ onPress }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: '#8257E5' }]} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { width: 65, height: 65, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 28, color: '#FFFFFF', fontWeight: 'bold' }
});