import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StylingExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Tugas Pertemuan 2 DPM</Text>
      <View style={styles.row}>
        <View style={styles.kiri}>
          <Text style={styles.text}>Kotak 1</Text>
        </View>
        <View style={styles.kanan}>
          <Text style={styles.text}>Kotak 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', 
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '75%', 
  },
  kiri: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  kanan: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  largeText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 25,
  },
});

export default StylingExample;